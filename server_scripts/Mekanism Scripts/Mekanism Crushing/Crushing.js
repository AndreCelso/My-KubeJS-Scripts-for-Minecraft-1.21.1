
ServerEvents.recipes(Receita => 
{
  function Crushing_Recipes(item_input, count_input,count_output, item_output) 
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
    
Crushing_Recipes("minecraft:ender_pearl", 1, 1, "ae2:ender_dust")
    
})