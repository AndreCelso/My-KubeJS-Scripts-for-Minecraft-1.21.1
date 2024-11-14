LootJS.modifiers((Loot) =>
{
    Loot.addTableModifier("minecraft:chests/simple_dungeon").randomChance(8.0).addLoot("silentgear:netherwood_sapling");
});