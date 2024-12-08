StartupEvents.registry('item', (event) => {
    const ritualDummies = [
        {
            id: 'occultism:ritual_dummy/Craft_zombie_head',
            type: 'craft',
            tooltip: 'Ritual para summonar uma Cabeça de Zumbi'
        }
    ];

    ritualDummies.forEach((item) => {
        event.create(item.id, 'occultism:ritual_dummy').pentacleType(item.type).ritualTooltip(item.tooltip);
    });
});