ServerEvents.recipes(Receita => 
{
  function Shapeless(outputItem, inputs) 
  {
    Receita.shapeless(outputItem, inputs)
  }
  Shapeless("2x powah:steel_energized", ["minecraft:iron_ingot", "minecraft:gold_ingot"])
})