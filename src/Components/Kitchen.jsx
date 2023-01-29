import React from 'react'
import { Outlet } from 'react-router-dom'


function Kitchen() {
    return (
        <>
            <div className='d-flex'>
                <p style={{ height: '500px', width: '500px', marginLeft: '200px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit numquam sed doloribus fugiat amet omnis explicabo. Inventore ipsam necessitatibus fugiat voluptate eaque perferendis blanditiis assumenda corporis sit ut, tenetur suscipit, deserunt earum harum temporibus vel error perspiciatis nobis nemo, officiis eveniet hic cumque nesciunt. Amet laborum eius non incidunt numquam vitae, aut praesentium quasi officiis quidem sequi nihil rem, quam perspiciatis suscipit quod cupiditate itaque accusamus aspernatur quibusdam asperiores. Quasi velit distinctio qui corrupti quisquam autem fuga! Perferendis magni fugiat minima obcaecati nam beatae blanditiis saepe, minus, placeat, asperiores doloremque quae. Modi vel quasi, alias sequi aliquid nobis odio fugit!
                <hr />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dignissimos culpa quasi inventore, vel voluptatibus eaque voluptatum laboriosam eveniet nostrum esse perspiciatis hic obcaecati, omnis error ad voluptates vitae non tempore blanditiis? Libero necessitatibus consequatur accusamus natus fugit nobis dignissimos reiciendis, sequi maxime magnam officia, dolorum iusto aspernatur perferendis tempora.
                </p>
                <img src="https://images.pexels.com/photos/6312072/pexels-photo-6312072.jpeg?auto=compress&cs=tinysrgb&w=600" style={{ height: '500px', width: '500px', marginRight: '100px' }} />
            </div>
            <Outlet />
        </>
    )
}

export default Kitchen