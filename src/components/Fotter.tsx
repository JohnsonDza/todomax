import React from 'react'
type props={
    length:number

}
const Fotter = ({length}:props) => {
    const today = new Date();
    return (
    <footer>
        <div>
            <h1>
                {length===1?`${length} item `: `${length} items`}
            </h1>

            Copyright &copy;{today.getFullYear()}
        </div>
    </footer>
  )
}

export default Fotter