package config

import (
	
	"project-sa67/entity/meeting_room"
)

func SetupMeetingRoomDatabase() {
	db.AutoMigrate(
		&entity.MeetingRoom{},
		&entity.CustomerMeetingRoom{},
		&entity.ManageRoom{},
		&entity.Duration{},
	)

	duration1 := &entity.Duration{
		StartTime:"08:00",
		EndTime:"12:00",
	}
	duration2 := &entity.Duration{
		StartTime:"13:00",
		EndTime:"16:00",
	}
	duration3 := &entity.Duration{
		StartTime:"18:00",
		EndTime:"22:00",
	}
	db.FirstOrCreate(&duration1, entity.Duration{
		StartTime:"08:00",
		EndTime:"12:00",
	})
	db.FirstOrCreate(&duration2, entity.Duration{
		StartTime:"13:00",
		EndTime:"16:00",
	})
	db.FirstOrCreate(&duration3, entity.Duration{
		StartTime:"18:00",
		EndTime:"22:00",
	})
	

	room1 := &entity.MeetingRoom{
		RoomName:     "Conference Room A",
		Capacity:     20,
		Detail:       "A medium-sized conference room with a projector and whiteboard.",
		RoomSize:     50.5,
		AirCondition: 1,
		Chair:        20,
		Type:         "Conference",
	}
	db.FirstOrCreate(&room1, entity.MeetingRoom{
		RoomName: "Conference Room A", // condition to find the existing record
	})


}