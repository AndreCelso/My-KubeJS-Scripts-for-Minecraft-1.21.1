ServerEvents.recipes(Receita =>
{
  function Reaction_Recipes()
  {
    Receita.custom(
    {
      "type": "mekanism:reaction",
      "chemical_input": {
        "amount": 100,
        "chemical": "mekanism:hydrogen"
      },
      "chemical_output": {
        "amount": 100,
        "id": "mekanism:ethene"
      },
      "duration": 100,
      "fluid_input": {
        "amount": 10,
        "tag": "minecraft:water"
      },
      "item_input": {
        "count": 10,
        "tag": "minecraft:cactus"
      },
      "item_output": {
        "count": 5,
        "id": "minecraft:slime_block"
      }
     })
   }

//Receita de Slime Block com Cactus na Pressurized Reaction Chamber
//Reaction_Recipes(27, 1000, "minecraft:water", 250, "mekanism:hydrogen", "mekanism:ethene", 50 , 10, "minecraft:cactus", 5, "minecraft:slime_block")

/* Reaction_Recipes(250, "mekanism:hydrogen", 50 ,"mekanism:ethene", 27, 1000, "minecraft:water", 10, "minecraft:cactus", 5, "minecraft:slime_block") */

Reaction_Recipes()
})