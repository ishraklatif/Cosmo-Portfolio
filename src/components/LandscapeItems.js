//Homepage Card
import React from 'react';
import './IndoorItem.css';
import IndoorList from './IndoorList';
import product from './Nichia-logo.png'
import product2 from './osram.png'
import product3 from './iso.png'

// const data = [
//   { name: "Available Wattages", description:"10w 18w 20w"},
//   { name: "Megha", age: 19, gender: "Female" },
//   { name: "Subham", age: 25, gender: "Male"},
// ]
function LandscapeItems() {
  return (
    <div className='indooritem_container'>
    <div className='indoor'>
      <h1>LED PANEL LIGHT(Surface & Conceal)</h1>
      <div className='indoor__container1'>
        <div className='indoor__wrapper'>
          <ul className='indoor__items'>
            <IndoorList
              src={product}
              text='BDTCL-LSRPL-01'
              path='/productdetails'
            />
            <IndoorList
              src={product}
              text='BDTCL-LSSPL-01'
              path='/productdetails'
            />
            <IndoorList
              src={product}
              text='BDTCL-LCRPL-01'
              path='/productdetails'
            />
            <IndoorList
              src={product}
              text='BDTCL-LCRPL-02'
              path='/productdetails'
            />
            <IndoorList
              src={product}
              text='BDTCL-LCRPL-03'
              path='/productdetails'
            />
            <IndoorList
              src={product}
              text='BDTCL-LCSPL-01'
              path='/productdetails'
            />
          </ul>
          <ul className='indoor__items'>
            <IndoorList
              src={product}
              text='BDTCL-LCSPL-02'
              path='/productdetails'
            />
            <IndoorList
              src={product}
              text='BDTCL-LSRPL-03'
              path='/productdetails'
            />
            <IndoorList
              src={product}
              text='BDTCL-LPL-01'
              path='/productdetails'
            />
            <IndoorList
              src={product}
              text='BDTCL-LPL-02'
              path='/productdetails'
            />
            <IndoorList
              src={product}
              text='BDTCL-LPL-03'
              path='/productdetails'
            />
            <IndoorList
              src={product}
              text='BDTCL-LPL-04'
              path='/productdetails'
            />
          </ul>
        </div>
      </div>
      <h1>LED TUBE LIGHT</h1>
      <div className='indoor__container2'>
        <div className='indoor__wrapper'>
          <ul className='indoor__items'>
            <IndoorList
              src={product2}
              text='BDTCL-LTL-01'
              path='/productdetails'
            />
            <IndoorList
              src={product2}
              text='BDTCL-LTL-01i'
              path='/productdetails'
            />
            <IndoorList
              src={product2}
              text='BDTCL-LTL-02'
              path='/productdetails'
            />
            <IndoorList
              src={product2}
              text='BDTCL-LTL-03'
              path='/productdetails'
            />
            
          </ul>

        </div>
      </div>
      <h1>LINEAR TUBE LIGHT(CATA)</h1>
      <div className='indoor__container3'>
        <div className='indoor__wrapper'>
          <ul className='indoor__items'>
            <IndoorList
              src={product3}
              text='SIZE: 4Ft'
              path='/productdetails'
            />
            <IndoorList
              src={product3}
              text='SIZE: 1Ft'
              path='/productdetails'
            />
            <IndoorList
              src={product3}
              text='SIZE: 2Ft'
              path='/productdetails'
            />
           
          </ul>
        </div>
      </div>
      <h1>TUBE LIGHT SHADE</h1>
      <div className='indoor__container4'>
        <div className='indoor__wrapper'>
          <ul className='indoor__items'>
            <IndoorList
              src={product3}
              text='BDTCL-TLS-01'
              path='/productdetails'
            />
            <IndoorList
              src={product3}
              text='BDTCL-TLS-02'
              path='/productdetails'
            />
            
           
          </ul>
        </div>
       </div>
      </div>
      <div className='indoor_features'>
        <h1>Features</h1>
        <div className='indoor__container__feature '>
          <div className='indoor__wrapper__feature'>
          
           <div className='indoor__feature__item'>
             {/* <div className='col1'>
                <h5 className='indoor__item__feature'>Available Watteges: </h5>
             </div>
             <div className='col2'>
                <ul>
                  <h5>10W 18W 20W</h5>
                  <h5>22W 24W 28W</h5>
                  <h5>LED LINEAR 10W 20W</h5>
                </ul>
              </div> */}
              <table>
                <tr>
                  <td>Available Wattages: </td>
                  <td>
                    <tr>
                      <td>10W 18W 20W 20W 24W 28W</td>
                      </tr>
                      <tr>  
                      <td>LED LINEAR 10W 20W</td>
                      </tr>
                  </td>
                </tr>
              </table>
           </div>
           <div className='indoor__feature__item'>
            {/* <div className='col1'>
              <h5 className='indoor__item__feature'>Working Volatages: </h5>
            </div>
            <div className='col2'>
              <ul>
                <h5 className='indoor__items__feature'>85-265 VAC</h5>
              </ul >
            </div> */}
            <table>
                <tr>
                  <td>Working Volatages: </td>
                  <td>
                    <tr>
                      <td>85-265 VAC</td>
                      
                    </tr>
                  </td>
                </tr>
              </table>
           </div>
           <div className='indoor__feature__item'>
            {/* <div className='col1'>
              <h5 className='indoor__item__feature'>Related Life: </h5>
            </div>
            <div className='col2'>
              <ul className='indoor__items__feature'>
                <h5>30000Hrs/50000Hrs</h5>
              </ul>
            </div> */}
            <table>
                <tr>
                  <td>Related Life: </td>
                  <td>
                    <tr>
                      <td>30000Hrs/50000Hrs</td>
                      
                    </tr>
                  </td>
                </tr>
              </table>
           </div>
           <div className='indoor__feature__item'>
            {/* <div className='col1'> 
              <h5 className='indoor__item__feature'>Power Factor: </h5>
            </div>
            <div className='col2'>
              <ul className='indoor__items__feature'>
                <h5>0.5 ~ 0.95</h5>
              </ul>
            </div> */}
            <table>
                <tr>
                  <td>Power Factor: </td>
                  <td>
                    <tr>
                      <td>0.5 ~ 0.95</td>
                     
                    </tr>
                  </td>
                </tr>
              </table>
           </div>
          <div className='indoor__feature__item'>
           {/* <div className='col1'>
            <h5 className='indoor__item__feature'>Core Temperature: </h5>
           </div>
           <div className='col2'>
            <ul className='indoor__items__feature'>
               <h5>3000k to 7000k</h5>
            </ul>
           </div> */}
           <table>
                <tr>
                  <td>Core Temperature: </td>
                  <td>
                    <tr>
                      <td>3000k to 7000k</td>
                      
                    </tr>
                  </td>
                </tr>
              </table>
          </div>
           <div className='indoor__feature__item'>
            {/* <div className='col1'>
              <h5 className='indoor__item__feature'>Efficacy: </h5>
            </div>
            <div className='col2'>
              <ul className='indoor__items__feature'>
                <h5>100LM/W to 120LM/W</h5>
              </ul>
            </div> */}
            <table>
                <tr>
                  <td>Efficacy: </td>
                  <td>
                    <tr>
                      <td>100LM/W to 120LM/W</td>
                      
                    </tr>
                  </td>
                </tr>
              </table>
           </div>
           <div className='indoor__feature__item'>
            {/* <div className='col1'>
              <h5 className='indoor__item__feature'>CRI</h5>
            </div>
            <div className='col2'>
              <ul className='indoor__items__feature'>
                <h5>80</h5>
              </ul>
            </div> */}
            <table>
                <tr>
                  <td>CRI: </td>
                  <td>
                    <tr>
                      <td>80</td>
                      
                    </tr>
                  </td>
                </tr>
              </table>
           </div>
           <div className='indoor__feature__item'>
            {/* <div className='col1'>
              <h5 className='indoor__item__feature'>LED Chips</h5>
            </div>
            <div className='col2'>
              <ul className='indoor__items__feature'>
                <h5>Osram/Bridglux/</h5>
                <h5>SanamEpistar</h5>
           
              </ul>
            </div> */}
            <table>
                <tr>
                  <td>LED Chips: </td>
                  <td>
                    <tr>
                      <td>Osram/Bridglux/</td>
                      <td>Sanam/Epistar</td>
                      
                    </tr>
                  </td>
                </tr>
              </table>
           </div>
           <div className='indoor__feature__item'>
            {/* <div className='col1'>
              <h5 className='indoor__item__feature'>LED Driver</h5>
            </div>
            <div className='col2'>
              <ul className='indoor__items__feature'>
               <h5>Meanwell/Phillips/</h5>
               <h5>Done/EC Standard</h5>
           
              </ul>
            </div> */}
            <table>
                <tr>
                  <td>LED Driver: </td>
                  <td>
                    <tr>
                      <td>Meanwell/Phillips/</td>
                      <td>Done/EC Standard</td>
                      
                    </tr>
                  </td>
                </tr>
              </table>
           </div>
           <div className='indoor__feature__item'>
            {/* <div className='col1'>
              <h5 className='indoor__item__feature'>Housing Material</h5>
            </div>
            <div className='col2'>
              <ul className='indoor__items__feature'>
                <h5>PC & Aluminium</h5>
         
              </ul>
            </div> */}
            <table>
                <tr>
                  <td>Housing Material: </td>
                  <td>
                    <tr>
                      <td>PC & Aluminium</td>
                      
                    </tr>
                  </td>
                </tr>
              </table>
           </div>
           <div className='indoor__feature__item'>
            {/* <div className='col1'>
              <h5 className='indoor__item__feature'>Available Sizes</h5>
            </div>
            <div className='col2'>
              <ul className='indoor__items__feature'>
                <h5>1ft 2ft 3ft & 4ft</h5>
           
              </ul>
            </div> */}
            <table>
                <tr>
                  <td>Available Sizes: </td>
                  <td>
                    <tr>
                      <td>1ft 2ft 3ft & 4ft</td>
                      
                    </tr>
                  </td>
                </tr>
              </table>
           </div>
          
          </div>
        </div>
      </div>
      </div>
      
    
    
  );
}

export default LandscapeItems;
