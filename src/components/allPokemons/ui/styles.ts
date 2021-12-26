export const allPokemonsStyles = {
  cardsContainer: {
    flex: 1,
    alignItems: "center",
    padding: "2%",
    maxWidth: "inherit",
    marginTop: "5%",
  },
  cardsSubContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gridGap: "2rem",
    alignSelf: "center",
  },
  loading: {textAlign: "center" as const, fontFamily: "pokemon", fontSize:20, fontWeight:"100"},
  error: {textAlign: "center" as const, color:"red",fontFamily: "pokemon", fontSize:20, fontWeight:"100"},
  page: {textAlign: "center" as const}
};

export const pokemonCardStyles = {
  cardContainer: {
    borderRadius: "1rem",
    backgroundColor: "#f0f8ff26",
    width: "auto",
    height: "auto",
    cursor: "pointer"
  },
  imageTileContainer: { display: "flex", justifyContent: "center" },
  skeletonLoaderStyle: {
    borderTopRightRadius: "1rem",
    borderTopLeftRadius: "1rem",
    backgroundColor: "lightgray",
  },
  imageStyle: {
    width: "200px",
    height: "200px",
    alignSelf: "center",
    maxWidth: "345px",
    marginTop: "-25px",
  },
  typesContainer: {
    textAlign: "left" as const,
    textTransform: "capitalize" as const,
    paddingLeft: "5%",
    marginTop: "2%",
    display: "flex",
    alignItems: "center"
  },
  typeChipStyle: {
    backgroundColor: "#4874f4",
    color: "yellow",
    borderColor: "yellow",
  },
  bottomSection: {
    display: "flex",
    flexDirection: "row" as const,
    marginTop: "2%",
    width: "100%",
    borderBottomRightRadius: "1rem",
    borderBottomLeftRadius: "1rem",
    cursor: "pointer",
    paddingBottom: "2%"
  },
  nameStyle: {
    fontSize: 24,
    textAlign: "left" as const,
    fontFamily: "pokemon",
    textTransform: "uppercase" as const,
    paddingLeft: "10%",
    marginTop: "2%",
  },
  redirectIconContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    padding: "2%",
  },
  iconStyle: {
    backgroundColor: "#4874f4",
    borderRadius: "20rem",
    padding: "3%",
    color: "yellow",
    fontSize: "20px",
    textAlign: "right" as const,
  },
};

export const headerStyles = {
  containerStyle: { display: "flex", justifyContent: "center" },
  imageStyle: { width: "400px", height: "200px", marginTop: "-2%", cursor:"pointer" },
};
