import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function HeaderTab() {

    const [ activeTab, setActiveTab ] = useState("Delivery");
    // console.log(activeTab);

    return (
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <HeaderButton text="Delivery" btnColor={'black'} textColor={'white'} activeTab={activeTab} setActiveTab={setActiveTab} />
            <HeaderButton text="Pickup" btnColor={'white'} textColor={'black'} activeTab={activeTab} setActiveTab={setActiveTab}/>
        </View>
    )
}


const HeaderButton = (props) => (
    <TouchableOpacity style={
        {
            backgroundColor: props.activeTab === props.text ? "black" : "white",
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30,
        }
    }
    onPress={()=> props.setActiveTab(props.text)}
    >
        <Text style={{
            color: props.activeTab === props.text ? "white" : "black",
            fontSize: 15,
            fontWeight: '900',
        }}>{props.text}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({

})