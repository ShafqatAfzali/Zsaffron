import mysql from "mysql";

export default function Betalt(props){
  const kunde = JSON.parse(props.kjøper_inf);
  const sann = props.sann;
  return (sann ? <div className="confirmed_page">
      <div className="logo">
        <h5 className='midlertidig-logo'>Zsaffron</h5>
      </div>
      <h3 className="confirmation_header">Thank you for choosing AdNaf {kunde.navn}</h3>
      <h3 className="confirmation_email">The Order confirmation has been set to your email: {kunde.email}</h3>
      <h3> Please check your spam folder</h3>
      </div> : <h1>you have not made a purchase</h1>)

}


export async function getStaticProps(){
  let data=[]
  let sann=false;
  try{
    const connection = mysql.createConnection({
      host: process.env.NEXT_AZURE_HOST,
      user: process.env.NEXT_AZURE_USER_NAME,
      password: process.env.NEXT_AZURE_PASS,
      database: process.env.NEXT_AZURE_DATABASE,
      port: process.env.NEXT_AZURE_PORT
    })
    
    const q1 = "SELECT * FROM kunde ORDER BY tid_kjøpt DESC LIMIT 1";
    const queryResult = await new Promise((resolve, reject) => {
      connection.query(q1, (err, result, field) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
    data = queryResult[0];
    data=JSON.stringify(data)
    connection.end();
    sann = true;
    return {
      props:{
        kjøper_inf: data,
        sann:sann
      }
    }
  } catch{
    data=[]
    sann=false
    
    return {
      props:{
        kjøper_inf: data,
        sann:sann
      }
    }
  }
}