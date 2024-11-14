ServerEvents.recipes(Recipe => 
{
  function Spirit_Fire_Recipes(Ingredient, count_output, Output) 
  {
    Recipe.custom
    (
     {
      "type": "occultism:spirit_fire",
      "ingredient": 
      {
       "item": Ingredient
      },
      "result": 
      {
       "count": count_output,
       "id": Output
      }
     }
    )
  }
})













/* ServerEvents.recipes(Receita => 
{
 function Ritual_Recipes(Ritual_Type, Activation_Item, Pentacle_ID, Duration, Ritual_Dummy, Ingredient_A, Ingredient_B, Ingredient_C, Ingredient_D, Output)
 {
  Receita.custom(
  {
    "type": "occultism:ritual",
    "activation_item": {
      "item": Activation_Item
    },
    "duration": Duration,
    "ingredients": [
      {
        "item": Ingredient_A
      },
      {
        "item": Ingredient_B
      },
      {
        "item": Ingredient_C
      },
      {
        "item": Ingredient_D
      }
    ],
    "pentacle_id": Pentacle_ID,
    "result": {
      "count": 1,
      "id": Output
    },
    "ritual_dummy": {
      "count": 1,
      "id": Ritual_Dummy
    },
    "ritual_type": Ritual_Type
  }
 )
}
Ritual_Recipes(
    "occultism:craft", 
    "minecraft:diamond",
    "occultism:craft_foliot", 
    12,
    "minecraft:diamond",
    "evilcraft:dark_gem","evilcraft:dark_gem", 'minecraft:book', 'evilcraft:condensed_blood',
    "minecraft:emerald")
}) */