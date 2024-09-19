import React, { useState } from "react";
import { Button, Form, Input, Modal, message as antdMessage,InputNumber } from 'antd';
import { MeetingInterface } from "../../../interface/IMeetingRoom"; // Adjust the path as necessary
import { DeleteMeetingRoomByID, UpdateMeetingRoom } from "../../../service/https";
import { useNavigate } from 'react-router-dom';

interface EditPopupProps {
    room?: MeetingInterface; // Room data to edit
    closePopup?: () => void; // Function to close the popup
    onDelete?: (roomId: number) => void; // Function to handle room deletion
    onSubmit?: (updatedRoom: MeetingInterface) => void; // Callback to submit the form data
}

const EditPopup: React.FC<EditPopupProps> = ({ room, closePopup, onDelete}) => {
    const navigate = useNavigate();
    const [rooms, setRooms] = useState<MeetingInterface[]>(room?[room]:[]);
    const [deleteID, setDeleteID] = useState<number | undefined>(room?.ID);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const onFinish = async (values: MeetingInterface) => {
        values.ID = room?.ID;
        const capacity = parseInt(values.Capacity, 10);
        const roomSize = parseFloat(values.RoomSize);
        const airCondition = parseInt(values.AirCondition, 10);
        const chair = parseInt(values.Chair, 10);
        values.Capacity = capacity;
        values.RoomSize = roomSize;
        values.AirCondition = airCondition;
        values.Chair = chair;
        if (room) {
            try {
                console.log(values);
                const res = await UpdateMeetingRoom(values);
                if (res) {
                    antdMessage.success(res.message || "Room updated successfully.");
                    setTimeout(() => {
                        navigate("/meetingRoom");
                    }, 2000);
                    if (closePopup) closePopup();
                } else {
                    antdMessage.error(res.message || "Failed to update room.");
                }
            } catch (error) {
                antdMessage.error("An unexpected error occurred.");
                console.error("UpdateMeetingRoom error:", error);
            }
        }
    };
    const handleDelete = () => {
        if (room?.ID) {
            Modal.confirm({
                title: 'Are you sure you want to delete this room?',
                content: 'This action cannot be undone.',
                okText: 'Yes, Delete',
                cancelText: 'No, Cancel',
                onOk: async () => {
                    setConfirmLoading(true);
                    try {
                        const res = await DeleteMeetingRoomByID(deleteID);
                        if (res) {
                            antdMessage.success("Room deleted successfully.");
                            if (closePopup) closePopup(); 
                        } else {
                            antdMessage.error("Failed to delete room.");
                        }
                    } catch (error) {
                        antdMessage.error("An unexpected error occurred.");
                        console.error("DeleteMeetingRoomByID error:", error);
                    } finally {
                        setConfirmLoading(false);
                    }
                }
            });
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Form
                name="edit-form"
                onFinish={onFinish}
                initialValues={{
                    RoomName: room?.RoomName,
                    RoomSize: room?.RoomSize,
                    Capacity: room?.Capacity,
                    AirCondition: room?.AirCondition,
                    Chair: room?.Chair,
                    Type: room?.Type,
                    Detail: room?.Detail,
                }}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ width: 500 }}
            >
                <Form.Item
                    name='RoomName'
                    label="Room Name"
                    rules={[{ required: true, message: 'Room Name is required' }]}
                >
                    <Input placeholder="Room Name" />
                </Form.Item>

                <Form.Item
                    name='RoomSize'
                    label="Room Size"
                    rules={[{ required: true, message: 'Max people is required' }]}
                >
                    <Input placeholder="Room Size" type="number" />
                </Form.Item>

                <Form.Item
                    name='Capacity'
                    label="Max People"
                    rules={[{ required: true, message: 'Max people is required' }]}
                >
                    <Input placeholder="Max People" type="number"/>
                </Form.Item>

                <Form.Item
                    name='AirCondition'
                    label="Air Condition"
                    rules={[{ required: true, message: 'Air condition is required' }]}
                >
                    <Input placeholder="Air Condition" type="number" />
                </Form.Item>

                <Form.Item
                    name='Chair'
                    label="Chair"
                    rules={[{ required: true, message: 'Chair is required' }]}
                >
                    <Input placeholder="Chair" type="number" />
                </Form.Item>

                <Form.Item
                    name='Type'
                    label="Room Type"
                    rules={[{ required: true, message: 'Room Type is required' }]}
                >
                    <Input placeholder="Room Type" />
                </Form.Item>

                <Form.Item
                    name='Detail'
                    label="Details"
                >
                    <Input.TextArea rows={4} placeholder="Details" />
                </Form.Item>

                <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: 'center' }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button type="default" onClick={closePopup} style={{ marginLeft: 10 }}>
                        Cancel
                    </Button>
                    {onDelete && (
                        <Button type="danger" onClick={handleDelete} style={{ marginLeft: 10 }}>
                            Delete
                        </Button>
                    )}
                </Form.Item>
            </Form>
        </div>
    );
};

export default EditPopup;
