import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import colors from "../assets/colors/colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default Details = ({ route, navigation }) => {
  const { item } = route.params;

  const renderIngredientsItem = ({ item }) => {
    return (
      <View
        style={[
          styles.ingredientItemWrapper,
          {
            marginLeft: item.id === 1 ? 20 : 15,
          },
        ]}
      >
        <Image source={item.image} style={styles.ingredientImage} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.headerLeft}>
              <Feather name="chevron-left" size={12} color={colors.textDark} />
            </View>
          </TouchableOpacity>
          <View style={styles.headerRight}>
            <MaterialCommunityIcons
              name="star"
              size={12}
              color={colors.white}
            />
          </View>
        </View>
      </SafeAreaView>
      {/* title */}
      <View style={styles.titlesWrapper}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      {/*price*/}
      <View style={styles.priceWrapper}>
        <Text style={styles.priceText}>{item.price}</Text>
      </View>
      {/* pizza info */}
      <View style={styles.infoWrapper}>
        <View style={styles.infoLeftWrapper}>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Size</Text>
            <Text style={styles.infoItemText}>
              {item.sizeName} {item.sizeNumber}*
            </Text>
          </View>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Crust</Text>
            <Text style={styles.infoItemText}>{item.crust}</Text>
          </View>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Delivery in: </Text>
            <Text style={styles.infoItemText}>{item.deliveryTime} mins</Text>
          </View>
        </View>
        <View>
          <Image source={item.image} style={styles.itemImage} />
        </View>
      </View>
      {/* ingredients */}
      <View style={styles.ingredientWrapper}>
        <Text style={styles.ingredientTitle}> Ingredients</Text>
        <View style={styles.ingredientListWrapper}>
          <FlatList
            data={item.ingredients}
            renderItem={renderIngredientsItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      {/* place an order */}
      <TouchableOpacity onPress={() => alert("Your order has been placed")}>
        <View style={styles.orderWrapper}>
          <Text style={styles.orderText}>Place an Order</Text>
          <Feather name="chevron-right" size={18} color={colors.black} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerLeft: {
    borderColor: colors.textLight,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },
  headerRight: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 10,
    borderColor: colors.textLight,
    borderWidth: 2,
  },
  titlesWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  title: {
    // fontFamily: "Monserrat-Bold"
    fontSize: 32,
    color: colors.textDark,
    width: "50%",
  },
  priceWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  priceText: {
    color: colors.price,
    // fontFamily: "Monserrat-Bold"
    fontSize: 32,
  },
  infoWrapper: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoLeftWrapper: {
    paddingLeft: 20,
  },
  infoItemWrapper: {
    marginBottom: 20,
  },
  infoItemText: {
    // fontFamily: 'Montserrat-SemiBold'
    fontSize: 18,
    color: colors.textDark,
  },
  infoItemTitle: {
    // fontFamily: 'Montserrat-Medium'
    fontSize: 14,
    color: colors.textLight,
  },
  itemImage: {
    resizeMode: "contain",
    marginLeft: 50,
  },
  ingredientWrapper: {
    marginTop: 10,
  },
  ingredientTitle: {
    paddingHorizontal: 20,
    // fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: colors.textDark,
  },
  ingredientListWrapper: {
    paddingVertical: 20,
  },
  ingredientItemWrapper: {
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 18,
    marginRight: 15,
    borderRadius: 15,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  ingredientImage: {
    resizeMode: "contain",
  },
  orderWrapper: {
    backgroundColor: colors.primary,
    marginTop: 10,
    marginHorizontal: 30,
    backfaceVisibility: colors.primary,
    borderRadius: 50,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  orderText: {
    // fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    color: colors.black,
  },
  marginRight: 10,
});
