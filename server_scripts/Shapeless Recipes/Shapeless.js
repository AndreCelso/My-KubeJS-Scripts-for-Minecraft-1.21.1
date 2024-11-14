ServerEvents.recipes(Receita => 
{
  function Shapeless(outputItem, inputs) 
  {
    Receita.shapeless(outputItem, inputs)
  }
  Shapeless("2x powah:steel_energized", ["minecraft:iron_ingot", "minecraft:gold_ingot"])

  Shapeless('minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:looting":2}}]',[ 'evilcraft:vein_sword[enchantments={levels:{"minecraft:looting":2}}]', '2x evilcraft:condensed_blood', 'evilcraft:dark_gem'])

  Shapeless('minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:fortune":5}}]',[ 'evilcraft:vengeance_pickaxe[enchantments={levels:{"evilcraft:vengeance":3,"minecraft:fortune":5}}]', '2x evilcraft:condensed_blood', 'evilcraft:dark_gem'])

  Shapeless("kubejs:silent_allthemodium_plate", "allthemodium:allthemodium_plate")

  Shapeless("allthemodium:allthemodium_plate","kubejs:silent_allthemodium_plate")

/*   Shapeless("kubejs:silent_vibranium_plate", ["allthemodium:vibranium_ingot", "c:tools/hammer"])

  Shapeless("kubejs:silent_unobtainium_plate", ["allthemodium:unobtainium_ingot", "c:tools/hammer"]) */
})