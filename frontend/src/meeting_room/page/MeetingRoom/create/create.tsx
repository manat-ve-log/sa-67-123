import React, { useState } from "react";
import { Button, Form, Input, message as antdMessage } from 'antd';
import { MeetingInterface } from "../../../interface/IMeetingRoom"; // Adjust the path as necessary
import { CreateMeetingRoom } from "../../../service/https";
import { useNavigate } from 'react-router-dom';

interface CreatePopupProps {
    closePopup?: () => void; 
}

const CreatePopup: React.FC<CreatePopupProps> = ({ closePopup }) => {

    const navigate = useNavigate();
    const [messageApi, contextHolder] = antdMessage.useMessage(); 

    const onFinish = async (values: MeetingInterface) => {
        const capacity = parseInt(values.Capacity, 10);
        const roomSize = parseFloat(values.RoomSize);
        const airCondition = parseInt(values.AirCondition, 10);
        const chair = parseInt(values.Chair, 10);
        values.Capacity = capacity;
        values.RoomSize = roomSize;
        values.AirCondition = airCondition;
        values.Chair = chair;
        try {
            const res = await CreateMeetingRoom(values);
            console.log(values);
            if (res) {
                messageApi.success("Room created successfully.");
                setTimeout(() => {
                    navigate("/meetingRoom");
                }, 2000);
            } else {
                messageApi.error("Failed to create room.");
            }
        } catch (error) {
            messageApi.error("An unexpected error occurred.");
            console.error("CreateMeetingRoom error:", error);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            {contextHolder} 
            <Form
                name="create-form"
                onFinish={onFinish}
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
                    <Input placeholder="Max People" type="number" />
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
                    <Input placeholder="Chair" type="number"/>
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
                </Form.Item>
            </Form>
        </div>
    );
};

export default CreatePopup;
