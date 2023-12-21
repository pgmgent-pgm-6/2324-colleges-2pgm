import { DATE_FORMAT } from "@core/constants";
import { getLogsByDate } from "@core/modules/logs/api";
import { LogWithRelations } from "@core/modules/logs/types";
import { formatTimeToString } from "@core/modules/logs/utils";
import HeaderButton from "@design/Button/HeaderButton";
import ListItem from "@design/List/ListItem";
import DefaultView from "@design/View/DefaultView";
import DataListView from "@shared/Data/DataListView";
import DateHeaderPicker from "@shared/Log/DateHeaderPicker";
import { format } from "date-fns";
import { useNavigation, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

const LogScreen = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const [date, setDate] = useState(new Date());

  const handleAddItem = () => {
    // pass date so we can prefill the date field
    router.push({
      pathname: "/logs/create",
      params: {
        date: format(date, DATE_FORMAT),
      },
    });
  };

  const handleItemPress = (log: LogWithRelations) => {
    router.push(`/logs/edit/${log.id}`);
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderButton onPress={handleAddItem} title="Add" icon="plus" />,
    });
  }, [navigation]);

  return (
    <DefaultView padding={false}>
      <DateHeaderPicker date={date} onDateChange={(date: Date) => setDate(date)} />
      <DataListView
        name={["logs", format(date, "yyyy-MM-dd")]}
        method={() => getLogsByDate(date)}
        emptyIcon="clock-time-two"
        emptyTitle="Geen logs"
        emptyDescription="Je hebt nog geen logs voor deze dag. Voeg nu je eerste log toe."
        onAddItem={handleAddItem}
        renderItem={({ item }: { item: LogWithRelations }) => (
          <ListItem
            title={item.comment}
            description={`${item.project.name} - ${item.project.client.name}`}
            right={formatTimeToString(item.time)}
            onPress={() => handleItemPress(item)}
          />
        )}
      />
    </DefaultView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

export default LogScreen;
