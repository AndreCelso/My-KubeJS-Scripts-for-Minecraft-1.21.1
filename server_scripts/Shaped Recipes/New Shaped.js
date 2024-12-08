ServerEvents.recipes(event => {
event.shaped("allthemodium:allthemodium_pickaxe", ['PRP', ' R ', ' R '], 
{
 R: "allthemodium:allthemodium_rod",
 P: "allthemodium:allthemodium_plate"
})

event.shaped("quarryplus:repeat_tick_module", ['APA', 'PTP', 'APM'],
{
 A: "minecraft:amethyst_shard",
 P: "minecraft:prismarine_shard",
 T: 'minecraft:potion[potion_contents={potion:"minecraft:water"}]',
 M: "quarryplus:marker"
})

event.shaped("allthemodium:allthemodium_axe", ['AA ', 'AR ', ' R '],
{
    A: "allthemodium:allthemodium_plate",
    R: "allthemodium:allthemodium_rod"
})
})
