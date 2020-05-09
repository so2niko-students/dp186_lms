export const updateGroupInGroupList = (groupList, newGroupData) =>{
    const group = groupList.find((g) => g.id === newGroupData.id );
    const groupIndex = groupList.indexOf(group);
    groupList[groupIndex] = newGroupData;
    return groupList;
}