import { View, Text, ScrollView } from "@gluestack-ui/themed";
import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { useIsFocused } from '@react-navigation/native';
interface TransactionListI {
  name: string;
  amount: number;
  typePay: string;
}
interface FirebaseTransaction {
  nazwaOdbiorcy: string;
  kwotaTransakcji: string;
  tutulPrzelewu: string;
}
interface TransactionWithId {
  transactionId: string;
  transactionData: TransactionListI;
}

interface LastTransactionProps {
  navigation: any;
  kluczZalogowanegoUżytkownika: string;
}

export const LastTransaction = ({ navigation,kluczZalogowanegoUżytkownika }: LastTransactionProps) => {
  const [transactions, setTransactions] = useState<TransactionWithId[]>([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch(
          "https://bank-app-3a23b-default-rtdb.europe-west1.firebasedatabase.app/transakcje/"+kluczZalogowanegoUżytkownika+".json"
        );
        const data = (await response.json()) as Record<string, FirebaseTransaction>;

          if(data){
            const loadedTransactions: TransactionWithId[] = Object.entries(data).map(([key, transactionInfo]) => ({
     
              transactionId: key,
              transactionData: {
                name: transactionInfo.nazwaOdbiorcy,
                amount: parseFloat(transactionInfo.kwotaTransakcji),
                typePay: transactionInfo.tutulPrzelewu,
              },
            }));
            setTransactions(loadedTransactions);
          }
          else{
            setTransactions([]);
          }
        // Przetwarzanie danych i aktualizacja stanu
  

        
      } catch (error) {
        console.error("Błąd podczas pobierania danych z bazy danych:", error);
      }
    };
      if(isFocused)
    fetchTransactions();
  }, [isFocused]);

  const TransactionElement = (transaction: TransactionListI) => (
    <View
      key={transaction.name}
      style={styles.transactionElement} // Styl powinien być zdefiniowany w pliku styles
    >
      <View style={styles.transactionDetail}>
        <Text style={styles.transactionName}>Odbiorca: {transaction.name}</Text>
        <Text style={styles.transactionType}>Tytuł: {transaction.typePay}</Text>
      </View>
      <View style={styles.transactionAmount}>
        <Text style={styles.transactionTextAmount}>
          {"-" + transaction.amount + " PLN"}
        </Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {transactions.map((item) => TransactionElement(item.transactionData))}
    </ScrollView>
  );


};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  transactionElement: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  transactionDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  transactionType: {
    fontSize: 14,
    color: 'gray',
  },
  transactionAmount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transactionTextAmount:{    
    fontSize: 16,
    fontWeight: 'bold',
    color:"red",},
});
