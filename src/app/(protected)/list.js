import { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import { usePaymentsDatabase } from "../../database/usePaymentsDatabase";
import { FlashList } from "@shopify/flash-list";
import { formatDateToBrazilian } from "../../utils/formatData";
import { formatCurrencyBRL } from "../../utils/formatCurrent";

export default function List() {
  const [data, setData] = useState([]);
  const { getPayments } = usePaymentsDatabase();
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  async function fetchData() {
    if (!hasMore) return;
    setPage(page + 1);
    const payments = await getPayments(page);
    if (payments.length < 5) setHasMore(false);
    setData([...data, ...payments]);
    setLoading(false);
  }

  useEffect(() => {
    setPage(0);
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <View style={styles.itemLeft}>
        <Text style={styles.itemName}>{item.nome}</Text>
        <View style={styles.itemDetails}>
          <Text style={styles.itemDate}>
            {formatDateToBrazilian(item.data_pagamento || new Date())}
          </Text>
          <Text style={styles.itemRecibo}>{item.numero_recibo}</Text>
        </View>
      </View>
      <Text style={styles.itemValue}>
        {formatCurrencyBRL(item.valor_pago || 0)}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlashList
        data={data}
        renderItem={renderItem}
        estimatedItemSize={70}
        onEndReached={fetchData}
        onEndReachedThreshold={0.8}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={
          loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#1E3A8A" />
              <Text style={styles.loadingText}>Carregando...</Text>
            </View>
          ) : null
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB", // Light neutral background for a clean look
    paddingTop: 15,
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginBottom: 15,
    backgroundColor: "#FFFFFF", // Clean white background for each item
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    shadowColor: "#000", // Subtle shadow for a floating card effect
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5, // Android shadow effect
  },
  itemLeft: {
    flex: 1,
    marginRight: 15,
  },
  itemName: {
    fontFamily: "bold",
    fontSize: 16,
    color: "#2C3E50", // Darker color for text for better contrast
    textTransform: "capitalize",
  },
  itemDetails: {
    flexDirection: "row",
    gap: 12,
    marginTop: 5,
  },
  itemDate: {
    fontFamily: "regular",
    fontSize: 14,
    color: "#7F8C8D", // Subtle gray for less important information
  },
  itemRecibo: {
    fontFamily: "regular",
    fontSize: 14,
    color: "#BDC3C7", // Light gray for receipt number
  },
  itemValue: {
    fontFamily: "bold",
    fontSize: 16,
    color: "#558678", // Dark blue color for value, giving it emphasis
    textAlign: "right",
    alignSelf: "center",
  },
  loadingContainer: {
    paddingVertical: 20,
    alignItems: "center",
  },
  loadingText: {
    fontFamily: "regular",
    fontSize: 14,
    color: "#7F8C8D",
    marginTop: 8,
  },
});
