ServerEvents.recipes(Receita => 
{
  function Enriching_Recipes(item_input, amount_input,count_output, item_output) 
  {
    Receita.custom
    ({
    "type": "mekanism:enriching",
    "input":
    {
     "count": amount_input,
     "tag": item_input
    },
    "output": {
     "count": count_output,
     "id": item_output
    }
    })
  }

Enriching_Recipes("c:raw_materials/copper", 1 , 3, "alltheores:copper_dust")

//Receita de Raw Gold para Gold Dust na Enrichment Chamber
Enriching_Recipes("c:raw_materials/gold",1, 3, "mekanism:dust_gold")

//Receita de Raw Iron para Iron Dust na Enrichment Chamber 
Enriching_Recipes("c:raw_materials/iron",1, 3, "mekanism:dust_iron")

//Receita de Raw Silver do Occultism para Silver Dust do Occultism na Enrichment Chamber
Enriching_Recipes("c:raw_materials/silver",1, 3, "occultism:silver_dust")


})
