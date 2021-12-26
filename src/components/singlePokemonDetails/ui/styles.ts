export const singlePokemonDetailsStyles = {
  pokemonImageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1976d2",
    paddingBottom: "12%",
  },
  pokemonImage: {
    marginTop: "1%",
    marginBottom: "1%",
    width: "200px",
    height: "200px",
    alignSelf: "center",
    maxWidth: "345px",
  },
  detailsSectionContainer: {
    textAlign: "center" as const,
    marginTop: "-12%",
    paddingBottom: "5%",
  },
  detailsSubContainerStyles: { width: "94%", marginLeft: "3%" },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    textAlign: "center" as const,
    fontFamily: "pokemon",
    textTransform: "uppercase" as const,
    paddingTop: "1%",
    paddingBottom: "1%",
    color: "black",
  },
  movesContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap" as const,
    marginTop: "2%",
  },
  movesChip: {
    backgroundColor: "#fff",
    color: "grey",
    borderColor: "orange",
    marginLeft: ".5%",
    textTransform: "capitalize" as const,
    textAlign: "left" as const,
  },
  typesChip: {
    backgroundColor: "#4874f4",
    color: "yellow",
    borderColor: "yellow",
  },
  statsContainer: { flexWrap: "wrap" as const, marginTop: "2%" },
  statsSubContainer: { display: "flex", margin: 2 },
  statName: { flex: 1 },
  statNumber: { flex: 2 },
  statDivider: { width: "80%", marginLeft: "10%", marginBottom: "2%" },
};

export const pokemonDetialItemStyles = {
  container: { display: "flex", margin: 2, padding: "2%" },
  descriptionContainer: { flex: 1 },
  iconStyle: { width: "50px", height: "50px" },
  valueContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  dividerStyle: { width: "80%", marginLeft: "10%" },
  titleStyle: { textTransform: "capitalize" as const },
};

export const accordionStyles = {
  container: { width: "94%", marginLeft: "3%", marginTop: "2%" },
  accordionStyle: { paddingBottom: "2%", paddingTop: "2%" },
  titleStyle: { width: "33%", flexShrink: 0 },
};

export const detailsScreenHeaderStyles = {
  appBarContainer: {
    backgroundColor: "#fff",
    maxWidth: "100%",
    position: "relative" as const,
  },
  ArrowBackIcon: { color: "black" },
  appBarLogoContainer: { flex: 1, alignItems: "center" },
  appBarLogo: {
    width: "200px",
    height: "100px",
    marginTop: "-2%",
    cursor: "pointer",
    marginLeft: "5%",
  },
  closeButtonStyle: {
    backgroundColor: "#4874f4",
    border: "none",
    padding: "6px",
    paddingLeft: "10px",
    paddingRight: "10px",
    cursor: "pointer",
    borderRadius: "10rem",
  },
  closeButtonText: { fontSize: 18, color: "yellow" },
};
