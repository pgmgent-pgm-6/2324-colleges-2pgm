import Divider from "@design/List/Divider";
import ListItem from "@design/List/ListItem";
import LogoutDialog from "@shared/Auth/Logout/LogoutDialog";
import UserHeader from "@shared/User/UserHeader";
import { Variables } from "@style";
import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

enum ListType {
  Profile = "profile",
}

type Item = {
  key: ListType | string;
  title?: string;
  color?: string;
  icon?: string;
  onPress: () => void;
};

const SettingsScreen = () => {
  const router = useRouter();
  const [showLogout, setShowLogout] = useState<boolean>();
  const items: Item[] = [
    {
      key: ListType.Profile,
      onPress: () => {
        router.push("/settings/edit");
      },
    },
    {
      key: "logout",
      title: "Logout",
      color: Variables.colors.error,
      icon: "logout",
      onPress: () => {
        setShowLogout(true);
      },
    },
  ];

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={items}
          ItemSeparatorComponent={() => <Divider />}
          renderItem={({ item }) =>
            item.key === ListType.Profile ? (
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
      {showLogout && <LogoutDialog onDismiss={() => setShowLogout(false)} />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SettingsScreen;
