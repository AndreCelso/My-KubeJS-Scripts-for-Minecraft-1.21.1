ServerEvents.recipes(Receita => 
{
  function Crushing_Recipes(count_input, item_input, count_output, item_output) 
  {
    Receita.custom
    ({
     "type": "mekanism:crushing",
     "input": 
     {
         "count": count_input,
         "item": item_input
     },
     "output": 
     {
      "count": count_output,
      "id": item_output
     }
     })
    }
/* //Receita de Raw Crimson Iron para Crimson Iron Dust no Crusher (2x)
Crushing_Recipes("silentgear:raw_crimson_iron", 1, 2, "silentgear:crimson_iron_dust", "Custom_Crimson_Iron_Crushing") */

//Crushing_Recipes(1, {"id": "evilcraft:vein_sword", "count": 1, "components": {"minecraft:enchantments": {"minecraft:looting": 2}}}, 1, {"id": "minecraft:enchanted_book", "count": 1, "components": {"minecraft:stored_enchantments": {"minecraft:looting": 2}}})

/* //Receita de Extração de Looting II da Vein Sword
Crushing_Recipes('evilcraft:vein_sword[enchantments={levels:{"minecraft:looting":2}}]', 1, 1, 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:looting":2}}]') */
    
})