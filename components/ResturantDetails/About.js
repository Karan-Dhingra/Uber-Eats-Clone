import React from 'react'
import { View, Text, Image } from 'react-native'

const image ="https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg"
const title="Farmhouse Kitchen Thai Cusine"
const description="Thai + Comfort Food + $$ • 🎫 • 5⭐ (2913+)"

// const {name, image, price, reviews, rating, categories} = yelpResturant()

export default function About() {
    return (
        <View>
            {/* <Text>ABOUT</Text> */}
            <ResturantImage image={image} />
            <ResturantTitle title={title} />
            <ResturantDescription description={description} />
        </View>
    )
}

const ResturantImage = (props) => (
    <Image source={{uri: props.image}} style={{
        width: "100%", height: 180
    }} />
)

const ResturantTitle = (props) => (
    <Text style={{
        fontSize: 29,
        fontWeight: '600',
        marginTop: 10,
        marginHorizontal: 15
    }} >
        {props.title}
    </Text>
)

const ResturantDescription = (props) => (
    <Text style={{
        fontSize: 15.5,
        fontWeight: '400',
        marginTop: 10,
        marginHorizontal: 15
    }} >
        {props.description}
    </Text>
)

