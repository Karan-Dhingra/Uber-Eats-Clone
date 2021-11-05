import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const localRestaurants = [
    {
        name: "Beachside Bar",
        image_url:
            "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Benihana",
        image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
    },
    {
        name: "India's Grill",
        image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Indian", "Bar"],
        price: "$$",
        reviews: 700,
        rating: 4.9,
    },
];


export default function ResturantItems({ resturantData, navigationPress }) {
    // console.log("NAVIGATION: ", navigation);

    return (
        <>
            {resturantData.map((restaurant, index) => (
                <TouchableOpacity 
                    onPress={navigationPress}
                    key={index} 
                    activeOpacity={1} 
                    style={{ marginBottom: 30 }}
                >
                    <View style={{ marginTop: 10, padding: 15, backgroundColor: 'white' }}>
                        <ResturantImage image={restaurant.image_url} />
                        <ResturantInfo name={restaurant.name} category={restaurant.categories} price={restaurant.price} rating={restaurant.rating} />
                    </View>
                </TouchableOpacity>
            ))}
        </>
    )
}

const ResturantImage = (props) => (
    <>
        <Image
            source={{
                uri: props.image
            }}
            style={{
                width: '100%', height: 180
            }}
        />
        <TouchableOpacity style={{ position: 'absolute', top: 20, right: 20, backgroundColor: 'white' }}>
            <MaterialCommunityIcons name="heart-outline" size={25} color='#000' />
        </TouchableOpacity>
    </>
);

const ResturantInfo = (props) => (
    <>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10
        }}>
            <View>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{props.name}</Text>
                <Text style={{ fontSize: 13, fontWeight: 'bold' }}>30-34 . min</Text>
            </View>
            <View style={{ backgroundColor: "#eee", height: 30, width: 30, alignItems: 'center', borderRadius: 15, justifyContent: 'center' }}>
                <Text>{props.rating}</Text>
            </View>
        </View>
    </>
)

