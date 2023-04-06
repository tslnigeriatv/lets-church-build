export const capitalizeName = (firstName, lastName) => {
    const newFirstName = firstName !== null ?  firstName[0]?.toUpperCase() + firstName?.slice(1, firstName?.length) : "";
    const newLastName = lastName !== null ? lastName[0]?.toUpperCase() + lastName?.slice(1, lastName?.length) : "";
    return newFirstName + " " + newLastName;
}