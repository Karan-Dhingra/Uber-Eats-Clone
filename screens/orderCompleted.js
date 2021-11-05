import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { useSelector } from 'react-redux' 
import LottieView from "lottie-react-native"
import firebase from '../firebase'
import MenuItems from '../components/ResturantDetails/MenuItems'

export default function OrderCompleted() {
    const { items, restaurantName } = useSelector(
        (state) => state.cartReducer.selectedItems
    );

    const [lastOrder, setLastOrder] = useState({
        items: [
            {
                title: "Lasagna",
                description: "With butter lettuce, tomato and sauce bechamel",
                price: "$13.50",
                image:
                    "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
            }
        ],
    })

    const total = items
        .map((item) => Number(item.price.replace("$", "")))
        .reduce((prev, curr) => prev + curr, 0);

    const totalUSD = total.toLocaleString("en", {
        style: "currency",
        currency: "USD",
    });

    useEffect(() => {
        const db = firebase.firestore();
        const unsubscribe = db.collection('orders')
        .orderBy('createdAt', 'desc')
        .limit(1)
        .onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                setLastOrder(doc.data())
            })
        })

        return () => unsubscribe();
    }, []);

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <View style={{
                flex: 1,
                margin: 15,
                alignItems: 'center',
                height: '100%',
            }}>
            <LottieView
                style={{ height: 100, alignSelf: 'center', marginBottom: 30 }}
                autoPlay
                speed={0.5}
                loop={false}
                source={require('../assets/animations/check-mark.json')}
            />
            <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom:10 }}>Your order at {restaurantName} has been placed for total ${totalUSD} </Text>
            <ScrollView>
                    <MenuItems foods={lastOrder.items} hideCheckbox={true} marginLeft={10}/>
                <LottieView
                    style={{ height: 200, alignSelf: "center" }}
                    source={require("../assets/animations/cooking.json")}
                    autoPlay
                    speed={0.5}
                />
            </ScrollView>
            </View>
        </SafeAreaView>
    )
}
