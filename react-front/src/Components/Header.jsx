import React from 'react'

export default function Header() {
  return (
    
    <header>
<logo>
  <img src="https://i.pinimg.com/originals/64/8e/58/648e58d071568bba75276ea8f632a7ad.gif" alt="" />
</logo>
      
      <div className='icon'>
       <img src="https://cdn-icons-png.flaticon.com/128/16/16492.png" alt="icon" /> </div>
    <input type="text" placeholder='  Buscar Docs'/>
        <ul>
          <li>Doc</li>
          <li>Tutorial</li>
          <li>Comunidade</li>
          <li>Blog</li>
          <li>API</li>
          <li>Github</li>
        </ul>
    </header>
  )
}
