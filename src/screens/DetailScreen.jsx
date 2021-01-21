import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {
    Text,
    Card,
    Badge,
    Icon,
    Button
} from 'react-native-elements';

const DetailScreen = ({ navigation }) => {
    let content = navigation.getParam('item');

    return (
        <>
            {content ? (
                <View style={styles.container}>
                    <View style={styles.productImageContainer}>
                        {content.croppedImage ? (
                            <Card.Image
                                source={{ uri: content.croppedImage }}
                                style={styles.image}
                                // resizeMethod='auto'
                                // resizeMode='contain'
                            />
                        ) : (
                            <Card.Image
                                source={require('../../assets/no_image.png')}
                                style={styles.image}
                                // resizeMethod='auto'
                                // resizeMode='center'
                            />
                        )}
                    </View>
                    <View style={styles.productDataContainer}>
                        <View style={styles.titleContainer}>
                            <Card.FeaturedTitle>{content.menuTitle}</Card.FeaturedTitle>
                        </View>
                        <View style={styles.classificationContainer}>
                            {content.classifications[0] === "INDICA" ? (
                                <Badge
                                    value={<Text style={styles.badgeText}>{content.classifications[0]}</Text>}
                                    status='primary'
                                />
                            ) : content.classifications[0] === "SATIVA" ? (
                                <Badge
                                    value={<Text style={styles.badgeText}>{content.classifications[0]}</Text>}
                                    status='warning'
                                />
                            ) : content.classifications[0] === "HYBRID" ? (
                                <Badge
                                    value={<Text style={styles.badgeText}>{content.classifications[0]}</Text>}
                                    status='success'
                                />
                            ) : null}
                            {content.subTypes[0] ? (
                                <Text style={styles.subTypeText}>{content.subTypes[0]}</Text>
                            ) : null}
                            <Text style={styles.weightText}>{content.productList[0].weight}g</Text>
                        </View>
                        <View style={styles.potencyContainer}>
                            <Text style={styles.potencyText}>THC {content.thc}</Text>
                            <Text style={styles.potencyText}>CBD {content.cbd}</Text>
                        </View>
                        <View style={styles.priceContainer}>
                            <Badge
                                value={<Text style={styles.badgeText}>${content.productList[0].displayPriceSell}.00 Plus Tax</Text>}
                                status='success'
                            />
                        </View>
                        <View style={styles.quantityContainer}>
                            <TouchableOpacity>
                                <Icon
                                    reverse
                                    name='minus'
                                    type='simple-line-icon'
                                    color='red'
                                    size={12}
                                />
                            </TouchableOpacity>
                            <Text style={{ color: '#f5f5f5', fontSize: 15, textAlignVertical: 'center'}}>Quantity: 1</Text>
                            <TouchableOpacity>
                                <Icon
                                    reverse
                                    name='plus'
                                    type='simple-line-icon'
                                    color='green'
                                    size={12}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.addToCartContainer}>
                            <TouchableOpacity>
                                <Button
                                    title='Add To Cart'
                                    type='outline'
                                />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.descriptionText}>
                                {content.description}
                            </Text>
                        </View>
                    </View>
                </View>
            ): null}
        </>
    );
};

export default DetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    productImageContainer: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    image: {
        width: 250,
        height: 250
    },
    productDataContainer: {
        flex: 1,
        backgroundColor: 'black',
        padding: 15
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    classificationContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        marginBottom: 8
    },
    badgeText: {
        color: '#f5f5f5',
        fontWeight: 'bold',
        paddingHorizontal: 15
    },
    subTypeText: {
        color: '#f5f5f5'
    },
    weightText: {
        color: '#f5f5f5'
    },
    potencyContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 8
    },
    potencyText: {
        color: '#f5f5f5'
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    quantityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    addToCartContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 8
    },
    descriptionText: {
        color: '#f5f5f5',

    }
})