module.exports = {
    attributes: {
        subject: {
            type: 'string',
            required: true
        },
        description: {
            type: 'string',
            required: true
        },
        eventDate: {
            type: 'string',
            required: true
        },
        startTime: {
            type: 'string',
            required: false,
            allowNull: true
        },
        endTime: {
            type: 'string',
            required: false,
            allowNull: true
        },
        allDayEvent: {
            type: 'boolean',
            defaultsTo: false
        },
        location: {
            type: 'string',
            required: false,
        },
}
}