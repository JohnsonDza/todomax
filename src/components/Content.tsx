"use client"



type props={
  handleClick:any,
  handleDelete:any,
   items: {
    id: number;
    item: string;
    checked: boolean;
  }[];

}

const Content = ({handleClick,handleDelete,items}:props) => {


  return (
    <div className="text-white">
      {items.length?(

        
          <ul>
            {items.map((item)=>(
              <li key={item.id}>
                <input
                type="checkbox"
                onChange={()=>handleClick(item.id)}
                checked={item.checked}/>
                 <label 
                 className={item.checked?`line-through`:''}
                 onDoubleClick={()=>handleClick(item.id)}>
                  {item.item}            
                  </label>
                  {` `}
                  <button 
                  onClick={()=>handleDelete(item.id)}
                  className="bg-red-950">Delete</button>
                  </li>
            ))}
          </ul>
       
    ):(<li>Your List is empty </li>)}
    </div>
  )
}

export default Content