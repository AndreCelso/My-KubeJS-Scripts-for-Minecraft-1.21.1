ServerEvents.recipes(Recipe => 
{
  function Rituals(actv_item, duration, Sacrifice_Disp, sacrifice_tag, ingredient1, ingredient2, ingredient3, ingredient4, pentacle_id, output_count, output_item, ritual_dummy, ritual_type, ID) 
  {
    Recipe.custom
    (
     {
      "type": "occultism:ritual",
      "activation_item": 
      {
       "item": actv_item
      },
      "duration": duration,
      "entity_to_sacrifice": 
      {
       "display_name": Sacrifice_Disp,
       "tag": sacrifice_tag
      },
      "ingredients": 
      [
       {
        "item": ingredient1
       },
       {
        "item": ingredient2
       },
       {
        "item": ingredient3
       },
       {
        "item": ingredient4
       }
     ],
      "pentacle_id": pentacle_id,
      "result": 
      {
       "count": output_count,
       "id": output_item
     },
      "ritual_dummy": 
      {
       "count": 1,
       "id": ritual_dummy
      },
      "ritual_type": ritual_type
     }
    ).id(ID)

  }

Rituals("occultism:book_of_binding_bound_foliot", 15, "ritual.occultism.sacrifice.chicken", "c:chickens", "reliquary:zombie_heart", "reliquary:zombie_heart", "reliquary:zombie_heart", "reliquary:zombie_heart", "occultism:craft_foliot", 1, "minecraft:zombie_head", "occultism:ritual_dummy/Craft_zombie_head" , "occultism:craft", "custom_zombie_head_ritual")
})