import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button } from "react-native-elements";
import { ListItem, Avatar, Icon } from "react-native-elements";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  ScrollView,
  Text,
  View,
} from "react-native"; /* No HTML elements in React native. Must use built-in components*/
import Layout from "./Layout";
import ScheduleView from "./Views/ScheduleView";
import TasksView from "./Views/TasksView";

export default App = () => {
  const list = Array.from(Array(20).keys());

  /* return (
    <View style={styles.container}>
      <ScrollView>
        {list.map((l, i) => (
          <ListItem key={i} bottomDivider style={{ width: 1000, height: 50 }}>
            <Avatar source={{ uri: l.avatar_url }} />
            <ListItem.Content>
              <ListItem.Title>{`Item ${l}`}</ListItem.Title>
              <ListItem.Subtitle>{`Example Item ${l}`}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </ScrollView>
    </View>
  ); */

  const [activeView, setActiveView] = useState("schedule");

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        {activeView === "schedule" && <ScheduleView />}
        {activeView === "tasks" && <TasksView />}
      </View>
      <View
        style={{
          backgroundColor: "red",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Button
          disableRipple
          icon={
            <View style={{ display: "flex", flexDirection: "column" }}>
              <Icon type="material-community" name="calendar-text" size={22} />
              <Text>Schedule</Text>
            </View>
          }
          buttonStyle={{
            backgroundColor: activeView === "schedule" ? "#CCCCCC" : "white",
            borderRadius: 0,
          }}
          containerStyle={{
            flex: 1,
          }}
          onPress={() => setActiveView("schedule")}
        />
        <Button
          disableRipple
          icon={
            <View style={{ display: "flex", flexDirection: "column" }}>
              <Icon
                type="material-community"
                name="order-bool-ascending-variant"
                size={22}
              />
              <Text>Tasks</Text>
            </View>
          }
          buttonStyle={{
            backgroundColor: activeView === "tasks" ? "#CCCCCC" : "white",
          }}
          containerStyle={{
            flex: 1,
          }}
          onPress={() => setActiveView("tasks")}
        />
      </View>

      {/* <Layout /> */}
    </SafeAreaView>
  );
  /* View maps to whatever platform. UIView = ios. AndroidView= android */
};

const styles = StyleSheet.create({
  /* Similar to makeStyles */
  container: {
    flex: 1,
    backgroundColor: "#bbffff",
    paddingTop: 40,
  },
  item: {},
});
