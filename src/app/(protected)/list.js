import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { usePaymentsDatabase } from "../../database/usePaymentsDatabase";
import { FlashList } from "@shopify/flash-list";


export default function List(){
    const [data, setData] = useState([])
    const {getPayments} = usePaymentsDatabase()

    async function fetchData(){
        const payments =  await getPayments ();
        console.log(payments);
        setData (payments);
        //vai buscar no banco de dados os pagamentos
      
    }

    useEffect(()=>{
        //executa a primeira fez a busca de dados
       fetchData ();
    },[])

    renderItem = ({item}) => (
        <View>
            <View>
                  <Text>Nome pagante</Text>
                  <Text>{item.valor_pago}</Text>
            </View>
            <View><Text>{item.valor_pago}</Text></View>
          
        </View>
       
      );

    return(
        <View style={{flex:1}}>
            <Text>Pagamentos</Text>
            <View  style={{flex:1}}>
                  <FlashList
             data={data}
             renderItem={renderItem}
              estimatedItemSize={200}
             />
            </View>
          
        </View>
    );
}