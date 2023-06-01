import axios from 'axios';
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "./index.module.css";
import Modal from '../components/Modal'
import ComboBox from '../components/Autocomplete'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress'
export default function Home() {
  const [foodInput, setFoodInput] = useState("");
  const [result, setResult] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [execute,setExecute] = useState(false);
  const [process,setProcess] = useState(false);
  const [loader,setLoader] = useState(false);

  const useStyles = makeStyles(theme => ({
    loader: {
      color: "#027040",
    },
    colorPrimary: {
      backgroundColor: '#027040',
    },
  }));
  



  useEffect(()=>{
    async function fetchData() {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `/api/receitas`
      };
      
      const receitas = await axios.request(config).then((response) => response.data).catch((error) => { console.log(error);});
      const receitasTitulo = receitas.items.map((i)=> i.titulo)
      setRecipes(receitasTitulo);
    }
    fetchData();
  },[])

  

  async function onSubmit(event) {
    event.preventDefault();
    setExecute(true);
    setProcess(true);
    try {
      const response = await fetch("/api/generatewine", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ food: foodInput }),
      });

      const data = await response.json();


      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      //const x = "\n\n1. Vinho Tinto Quinta do Portal Reserva: Um vinho tinto doce e intenso, com aromas de frutas negras, especiarias e baunilha. É um vinho equilibrado, com taninos suaves e um final de boca persistente.\n\n2. Vinho Branco Marques de Riscal Rueda Verdejo: Um vinho branco frutado, com aromas de frutas cítricas, flores brancas, ervas aromáticas e minerais. É um vinho fresco e equilibrado, com boa acidez e um final de boca persistente.\n\n3. Vinho Tinto Casa Ferreirinha Douro Reserva: Um vinho tinto intenso e frutado, com aromas de frutas negras, especiarias, baunilha e tostados. É um vinho equilibrado, com taninos suaves e um final de boca persistente.\n\n4. Vinho Branco Château de Pizay Beaujolais Blanc: Um vinho branco aromático, com aromas de frutas tropicais, flores, especiarias e tostados. É um vinho leve e equilibrado, com boa acidez e um final de boca persistente.\n\n5. Vinho Tinto Quinta do Noval LBV Porto: Um vinho tinto doce e intenso, com aromas de frutas negras, especiarias, baunilha e tostados. É um vinho equilibrado, com taninos suaves e um final de boca persistente.";
      //data.result.
      console.log(data.result)
      setResult(data.result.split("\n").filter((i) =>{
        if(i !=""){
          return i;
        }
      }));
      setProcess(false);
    } catch(error) {
      console.error(error);
      alert(error.message);
    }finally{
      setProcess(false);
    }
  }




  const handleProducts = async (product) => {

    setLoader(true);
    const p = product.split(".")
    const prod = p[1].split(" ")

    const arraySemVazios = prod.filter(function (i) {
      return i;
    });

    console.log(arraySemVazios);
    console.log(arraySemVazios.length);
    console.log(arraySemVazios[arraySemVazios.length -2]);
    console.log(arraySemVazios[arraySemVazios.length -1]);
    const wordkey = `Vinho ${arraySemVazios[arraySemVazios.length -2]} ${arraySemVazios[arraySemVazios.length -1]}`;
    console.log(wordkey.replace(/[^a-zA-Z\s]/g, ""));
    const wordcallback = `${arraySemVazios[0]} ${arraySemVazios[1]}`;
    console.log(wordcallback);


    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `/api/external`,
      params: {
        product: wordkey.replace(/[^a-zA-Z\s]/g, "")
      },
    };

    let config2 = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `/api/external`,
      params: {
        product: 'Vinho tinto'
      },
    };

    const productsVTEXC = axios.request(config2).then((response) => response.data).catch((error) => { console.log(error);});
    const productsVTEXW = axios.request(config).then((response) => response.data).catch((error) => { console.log(error);});
    const arrVTEX = await Promise.all([productsVTEXC, productsVTEXW]).then((response) => {
      setLoader(false);
      return response}).catch((error) => { console.log(error);});
    console.log(arrVTEX);
    const productsVTEX = arrVTEX[1].length > 0 ? arrVTEX[1]: arrVTEX[0];
    const productsData = productsVTEX?.map((prod)=>{
      const [item] = prod.items;
      const [imagem] = item.images
      const {sellers} =  item;
      const [seller] = sellers;
      const {commertialOffer} = seller;
      const {Installments} = commertialOffer;
      const [first] = Installments;


      return {
        name: prod.productName,
        imagem: imagem.imageUrl,
        price: first.Value
      }
    })
    setProducts(productsData);
  };
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>OpenAI Example</title>
        <link rel="icon" href="/icon-garrafa-de-vinho.png" />
      </Head>

      <main className={styles.main}>
        <div style={{display:"flex"}}>
          <div style={{padding:"5px"}}>
            <img src="/icon-garrafa-de-vinho.png" className={styles.icon} />
          </div>
          <div style={{padding:"5px",fontFamily:'Gilroy',fontWeight:"800",fontSize:"32px"}}>
            <h3>Somelier Zaffari</h3>
          </div>
        </div>
        {!execute && (
          <>
            <h3 style={{fontFamily:"Montserrat",fontWeight:400}}>Qual será a receita de hoje?</h3>
            <p style={{width:"500px",textAlign:"center",fontFamily:"Montserrat",fontSize:'16px',lineHeight:"32px"}}>Encontre a receita perfeita entre as opções do nosso catálogo e então o <span style={{color:"#027040",fontWeight:"bold"}}>Sommelier Zaffari</span> irá harmonizar vinhos com a sua escolha.</p>
            <form onSubmit={onSubmit}>
              <ComboBox recipes={recipes} setFoodInput={setFoodInput} />
              <input type="submit" value="Harmonizar" />
            </form>
          </>
        )}
           
           
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"}}>
        {(execute) && (
          <h2 style={{fontFamily:"Montserrat",fontWeight:600,color:"#027040",fontSize:"32px" }}>{foodInput}</h2>
        )}
      
         {(execute && process) && (
          <>
            <img src="/icons8-analyze1.png" className={styles.icon} />
            <p style={{width:"386px",color:"#9E9E9E",fontSize:"16px"}}>Nosso sommelier está encontrando as melhores harmonizações para o seu prato, aguarde.</p>
         </>
         )}
         </div>
         

        {(execute && !process) && (
          <>
        <p style={{fontSize:"16px",color:"#9E9E9E",fontSize:"16px"}}>Aqui estão as opções de vinhos para harmonização</p>
        <div className={styles.result}>
          {result.map((i)=> (<div className={styles.roundedBox}>
            <p style={{width:"80%",margin:"0 5% 0 5%"}}>{i}</p>
            <a style={{width:"10%",height:"78px",backgroundColor:"#027040",borderRadius:"10px",padding:"10px", marginTop: 'auto',color:"#FFF",cursor:"pointer",fontSize:"16px",display:"flex",alignContent:"center",alignItems:"center",flexDirection:"column"}} onClick={() => {
              setShowModal(true);
              handleProducts(i.split(':')[0])}}>
                <span style={{flex:1,display:"flex",alignItems:"center"}}>
                <img src="/cart.png" style={{width:"24px",height:"24px"}}/>
                </span>
                <span style={{color:"#FFF",  marginTop: "auto"}}>Comprar</span>
                </a>
              
            <Modal
                open={showModal} 
                onClose={() => {
                  setShowModal(false)
                  setProducts([]);
                }}>
               <div style={{width:"100%",paddingBottom: "20px",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",fontFamily:"Montserrat"}}><h3 style={{color:"#027040",fontWeight:"600",fontSize:"29px"}}>Encontrei os seguintes produtos disponíveis em nossas lojas</h3></div>
               {loader && (<div style={{width:"100%",paddingBottom: "20px",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",fontFamily:"Montserrat"}} className={classes.loader}>
                  <CircularProgress sx={{color:"#027040"}} />
                </div>)}
                <div style={{display:"flex",flexWrap:"wrap"}}>
                 {products?.map((product,index)=>( 
                  <div style={{flexBasis: "50%"}}>
                   <div style={{display:"flex", margin:"5px",borderRadius:"10px",background:"#FFF",padding:"5px",border:"2px solid #027040",height:"70px"}}>
                    <div style={{width:"30%", height:"100%", display:"flex",alignItems:"center"}}><img style={{width:"50px"}}src={product.imagem}/></div>
                    <div style={{width:"70%",color:"#027040"}}>
                      <h3 style={{fontSize:"10px"}}>{product.name}</h3>
                      <span style={{fontWeight:"600",fontSize:"20px"}}>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                    </div>
                  </div>
                  </div>))}
                </div>
            </Modal>
          </div>) )}
        </div></>)}
      </main>
    </div>
  );
}
