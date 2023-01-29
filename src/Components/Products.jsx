import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
    return (
        <>
            <div>
                <div>
                    <button className="btn-outline-success rounded  ">
                        <Link to={'kitchen'} >Kitchen</Link>
                    </button>
                </div>
                <div>
                    <button className="btn-outline-success rounded ">
                        <Link to={'kitchen/simplekitchen'}  >Simple Kitchen</Link>    
                    </button>
                </div>
            </div>
            <div style={{border:'1px dashed black' , borderRadius:'50px'}}>

            </div>
            <Outlet />
        </>
    )
}

export default Products