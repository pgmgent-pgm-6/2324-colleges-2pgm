import { logout } from "@core/modules/auth/api";
import TextAvatar from "@design/Avatar/TextAvatar";
import Button from "@design/Button/Button";
import Divider from "@design/List/Divider";
import ListHeader from "@design/List/ListHeader";
import ListItem from "@design/List/ListItem";
import Text from "@design/Text/Text";
import { useAuthContext } from "@shared/Auth/AuthProvider";
import UserHeader from "@shared/User/UserHeader";
import { Variables } from "@style";
import { useRouter } from "expo-router";
import { FlatList, StyleSheet, View } from "react-native";

type Item = {
  key: string;
  title?: string;
  color?: string;
  icon?: string;
  onPress: () => void;
};

const SettingsScreen = () => {
  const router = useRouter();
  const items: Item[] = [
    {
      key: "profile",
      onPress: () => {
        router.push("/settings/edit");
      },
    },
    {
      key: "logout",
      title: "Logout",
      color: Variables.colors.error,
      icon: "logout",
      onPress: () => logout(),
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({ item }) =>
          item.key === "profile" ? (
            <UserHeader onPress={item.onPress} />
          ) : (
            <ListItem
              title={item.title ?? ""}
              color={item.color}
              onPress={item.onPress}
              icon={item.icon}
              iconColor={item.color}
            />
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SettingsScreen;
