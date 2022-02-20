let Std =[
    {id:2, name :"haris"},
    {id:2, name :"ali"},
    {id:1, name :"kamran"},
    {id:3, name :"noshan"},
    {id:4, name :"anum"},
  ]
  
  let stdId = Std.map(({id}) => id)
  let filtered = Std.filter((item, index) => !stdId.includes(item.id, index+1))

  console.log(filtered)