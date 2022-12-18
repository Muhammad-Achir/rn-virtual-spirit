import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

function PictureHeader(props) {
    function handleLikeDislikeAll(type) {
        props.handleLikeDislikeAll(type)
    }

    function resetLike() {
        props.resetLike()
    }

    return (
        <View style={styles.header}>
            <TouchableOpacity
                style={styles.buttonLike}
                onPress={() => handleLikeDislikeAll("LIKE_ALL")}
            >
                <Text style={styles.textWhite}>Like All</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonReset}
                onPress={resetLike}
            >
                <Text style={styles.textGray}>Reset All</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonDislike}
                onPress={() => handleLikeDislikeAll("DISLIKE_ALL")}
            >
                <Text style={styles.textWhite}>Dislike All</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        justifyContent: "space-between",
        flexDirection: "row",
        marginVertical: 20,
        paddingHorizontal: 8
    },
    buttonLike: {
        alignItems: "center",
        borderRadius: 10,
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: "#2774cc",
    },
    buttonReset: {
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 10,
        flex: 1,
        justifyContent: "center",
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 8,
        shadowColor: "grey",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.5
    },
    buttonDislike: {
        alignItems: "center",
        borderRadius: 10,
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: "#e02828",
    },
    textWhite: {
        color: "white",
        fontSize: 18
    },
    textGray: {
        color: "gray",
        fontSize: 18
    }
})

export default PictureHeader;
