import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { Children } from 'react'
import { colors, ScreenWidth } from './shared'

const Button = (props) => {
  const { title, type, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress} style={{ justifyContent: "center", alignItems: "center", backgroundColor: colors.primary, padding: 10, marginTop: 16, borderRadius: 5, width: type === "full" ? ScreenWidth - 40 : ScreenWidth * 0.5 }}>
        <Text style={{ fontSize: 13, fontFamily: "Montserrat_700Bold", color: colors.white }}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({})