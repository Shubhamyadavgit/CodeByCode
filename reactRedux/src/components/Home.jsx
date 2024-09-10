import React from 'react'

const Home = (props) => {
    console.log(props);
    
  return (
    <div>
    <div className='add-to-cart'>
    <span>{props.data.length}</span>
    <img src="https://imgs.search.brave.com/OfrItGh0Bu6KA7IF26ciMPaZYTjAxWiB4-kTx3rKrpI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ExL2Mw/L2M2L2ExYzBjNmQz/OTdjYzFlYmY3ZjNl/Zjg0ODUyOGY0ZmMx/LmpwZw" alt="" />
    </div>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://imgs.search.brave.com/DHqed9e_jf8-F1HjuX7RgrIRHt_blk-Qwtr7GHbxKQ8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZHNh/c3NldHMuYXBwbGUu/Y29tL2xpdmUvN1dV/QVMzNTAvaW1hZ2Vz/L2lvcy1hcHBzL2lw/aG90by9pb3MxNS1p/cGhvbmUxMy1wcm8t/bG9jay1zY3JlZW4t/Y2FtZXJhLWNhbGxv/dXQucG5n" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCart({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>
                </div>
            </div>
    </div>
  )
}

export default Home