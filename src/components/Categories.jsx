import { useState } from "react"



export default function Categories (){
    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
    const [activeIndex, setActiveIndex] = useState (0)
    const onClickCategories = (index) => {
        setActiveIndex(index)
    }


    return (
      <div className="categories">
                <ul>
                    {
                        categories.map((item, index) => {
                            return (<li onClick={() => 
                                onClickCategories(index)} 
                                NclassNameName={activeIndex === index ? "active" : ''}>{item}</li>
                            )
                        })
                    }
                </ul>
              </div>
    )
  }