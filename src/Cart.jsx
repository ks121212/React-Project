import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';


function App(){
   
   const [count,setCount]=useState(0);
   const [cart,setCart]=useState('Add to cart');
   const [cart1,setCart1]=useState('Add to cart');
   const [cart2,setCart2]=useState('Add to cart');
   const [cart3,setCart3]=useState('Add to cart');
   const [cart4,setCart4]=useState('Add to cart');
   const [cart5,setCart5]=useState('Add to cart');
   const [cart6,setCart6]=useState('Add to cart');
   const [cart7,setCart7]=useState('Add to cart');
    
  
  
    const handleClick=(event)=>{
    setCart('Remove to cart');
     setCount(count+1)
    if(cart=='Remove to cart'){
        setCart('Add to card')
        setCount(count-1);
    }
    }
   

    const handleClick1=(event)=>{
        setCart1('Remove to cart');
     setCount(count+1)
    if(cart1=='Remove to cart'){
        setCart1('Add to card')
        setCount(count-1);
    }
        }
        const handleClick2=(event)=>{
            setCart2('Remove to cart');
            setCount(count+1)
           if(cart2=='Remove to cart'){
               setCart2('Add to card')
               setCount(count-1);
           }
            }
            const handleClick3=(event)=>{
                setCart3('Remove to cart');
                setCount(count+1)
               if(cart3=='Remove to cart'){
                   setCart3('Add to card')
                   setCount(count-1);
               }
                }
                const handleClick4=(event)=>{
                    setCart4('Remove to cart');
                    setCount(count+1)
                   if(cart4=='Remove to cart'){
                       setCart4('Add to card')
                       setCount(count-1);
                   }
                    }
                    const handleClick5=(event)=>{
                        setCart5('Remove to cart');
                        setCount(count+1)
                        if(cart5=='Remove to cart'){
                            setCart5('Add to card')
                            setCount(count-1);
                        }
                    }
                    const handleClick6=(event)=>{
                        setCart6('Remove to cart');
                        setCount(count+1)
                        if(cart6=='Remove to cart'){
                            setCart6('Add to card')
                            setCount(count-1);
                        }
                    }                                        
     const handleClick7=(event)=>{
                        setCart7('Remove to cart');
                        setCount(count+1)
                        if(cart7=='Remove to cart'){
                            setCart7('Add to card')
                            setCount(count-1);
                        }
                    }

  return(
    <div className="wrapper">
  {/* // <!-- Navigation--> */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#!">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#!">All Products</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill"  >{count}</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
        {/* // <!-- Header--> */}
        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>
        {/* // <!-- Section--> */}
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="/image/image2.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">jilebi</h5>
                                    {/* <!-- Product price--> */}
                                    <p className="text-center">$90-$120</p>
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#"  onClick={handleClick6}>{cart6}</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Sale badge--> */}
                            <div className="badge bg-dark text-white position-absolute" >Sale</div>
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="/image/image4.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Special Item</h5>
                                    <h6 className="fw-bolder">ibaco</h6>
                                    {/* <!-- Product reviews--> */}
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="fa fas-star-fill"></div>
                                        <div className="fa fas-star-fill"></div>
                                        <div className="fa fas-star-fill"></div>
                                        <div className="fa fas-star-fill"></div>
                                        <div className="fa fas-star-fill"></div>
                                    </div>
                                    {/* <!-- Product price--> */}
                                    <span className="text-muted text-decoration-line-through">$20.00</span>
                                    <span>$18.00</span>
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={handleClick}>{cart}</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Sale badge--> */}
                            <div className="badge bg-dark text-white position-absolute">Sale</div>
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="/image/images1.jpg" alt="" />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Sale Item</h5>
                                    <h6 className="fw-bolder">KitKat</h6>
                                    {/* <!-- Product price--> */}
                                    <span className="text-muted text-decoration-line-through">$50.00</span>
                                   <span> $25.00</span>
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={handleClick1}>{cart1}</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="/image/image3.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Popular Item</h5>
                                    <h6 className="fw-bolder">Bunch of Sweets</h6>
                                    {/* <!-- Product reviews--> */}
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                    {/* <!-- Product price--> */}
                                    <p>$40.00</p>
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={handleClick2}>{cart2}</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Sale badge--> */}
                            <div className="badge bg-dark text-white position-absolute" >Sale</div>
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="/image/image6.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Sale Item</h5>
                                    <h6 className="fw-bolder">Indian Sweets Stock</h6>
                                    {/* <!-- Product price--> */}
                                    <span className="text-muted text-decoration-line-through">$50.00</span>
                                    <span>$25.00 </span>
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={handleClick3}>{cart3}</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="/image/image9.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Fancy Product</h5>
                                    <h6 className="fw-bolder">Choclate Sweets Stocks</h6>
                                    {/* <!-- Product price--> */}
                                   <p>$120.00 - $280.00</p> 
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={handleClick4}>{cart4}</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Sale badge--> */}
                            <div className="badge bg-dark text-white position-absolute" >Sale</div>
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="/image/image8.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Special Item</h5>
                                    <h6 className="fw-bolder">Bunch of Choclates</h6>
                                    {/* <!-- Product reviews--> */}
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                    {/* <!-- Product price--> */}
                                    <span className="text-muted text-decoration-line-through">$20.00</span>
                                   <span> $18.00</span>
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={handleClick5}>{cart5}</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="/image/image7.jpg" alt="..." />
                          
                            <div className="card-body p-4">
                                <div className="text-center">
                                
                                    <h5 className="fw-bolder">Popular Item</h5>
                                    <h6 className="fw-bolder">Celebration Chocolate Stock</h6>
                                   
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                  
                                   <p> $40.00</p>
                                </div>
                            </div>
                           
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={handleClick7}>{cart7}</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy;span Your Website 2023</p></div>
        </footer>
        </div>
  )
}

export default App;