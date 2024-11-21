import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { usePaymentsDatabase } from "../../database/usePaymentsDatabase";
import { FlashList } from "@shopify/flash-list";
import { formatDateBrazilian } from "../../utilss/formatData";
import { setOriginalNode } from "typescript";


export default function List(){
    const [data, setData] = useState([])
    const {getPayments} = usePaymentsDatabase()
    const [page, setPage] = useState(0)
    const [loading, setLoading] = useState(true)
    const [hasMore, setHasMore] = useState(true)

    async function fetchData(){
        if (hasMore == false) return;
        console.log(page)

        setPage(page + 1)

        const payments =  await getPayments (page);

        if (payments.length < 5) setHasMore(false) 

        //console.log(payments);
        setData ([...data, ...payments]);
        setLoading(false)
        //vai buscar no banco de dados os pagamentos
      
    }

    useEffect(()=> {
        //executa a primeira fez a busca de dados
        setPage(0)
       fetchData ()
    },[])

    renderItem = ({item}) => (
        <View style={{flexDirection:"row", margin:5, height:150, margin: 15, padding: 3, backgroundColor:"#fff", marginHorizontal: 5}}>
            <View style={{flex:1, gap: 5}}> 
                <Text style={{fontFamily:"bold", fontSize: 20, textTransform: "uppercase" }}>{item.nome}</Text>
                <View style={{flexDirection:'row', gap:10}}>
                  <Text style={{fontFamily:'regular'}}>{formatDateBrazilian (item.data_pagamento || new Date())}</Text>
                  <Text>{item.numero_recibo}</Text>
                </View>
            </View>
            <View><Text style={{flex:1, justifyContent:'center', alignItems:'center',}}>{formatCurrencyBRL (item.valor_pago || 0)}</Text></View>
          
        </View>
       
      );

    return(
        <View style={{flex:1}}>
            <Text>Pagamentos</Text>
            <View  style={{flex:1}}>
                  <FlashList
             data={data}
             renderItem={renderItem}
              estimatedItemSize={50}
              anEndReached={fetchData}
              anEndReachedThreshold={0.8}
              keyExtractor={(item) => item.id.toString()}
             />
            </View>
          
        </View>
    );
}         