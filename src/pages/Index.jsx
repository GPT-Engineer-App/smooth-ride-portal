import { useState } from "react";
import { Container, VStack, Input, Button, Text, HStack, Box, IconButton, Image, useToast } from "@chakra-ui/react";
import { FaTaxi, FaUser, FaMapMarkerAlt, FaSignInAlt, FaSignOutAlt, FaCar, FaBell } from "react-icons/fa";

const Index = () => {
  const [page, setPage] = useState("signup");
  const [role, setRole] = useState(null);
  const [destination, setDestination] = useState("");
  const [taxiDetails, setTaxiDetails] = useState(null);
  const toast = useToast();

  const handleSignUp = () => {
    setPage("home");
  };

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
    setPage(selectedRole === "seeker" ? "searchTaxi" : "shiftOptions");
  };

  const handleSearchTaxi = () => {
    setPage("results");
  };

  const handleBookTaxi = () => {
    setTaxiDetails({
      driverName: "John Doe",
      carModel: "Toyota Prius",
      plateNumber: "XYZ 1234",
      eta: "5 mins",
    });
    setPage("bookingConfirmation");
  };

  const handleShiftToggle = (status) => {
    toast({
      title: `Shift ${status ? "On" : "Off"}`,
      status: status ? "success" : "warning",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      {page === "signup" && (
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to TaxiApp! Please sign up with your Gmail and password to start.</Text>
          <Input placeholder="Gmail" />
          <Input placeholder="Password" type="password" />
          <Button onClick={handleSignUp} colorScheme="teal">
            Sign Up
          </Button>
          <Button variant="link" onClick={() => setPage("login")}>
            Log In
          </Button>
        </VStack>
      )}

      {page === "login" && (
        <VStack spacing={4}>
          <Text fontSize="2xl">Log In</Text>
          <Input placeholder="Gmail" />
          <Input placeholder="Password" type="password" />
          <Button onClick={handleSignUp} colorScheme="teal">
            Log In
          </Button>
          <Button variant="link" onClick={() => setPage("signup")}>
            Sign Up
          </Button>
        </VStack>
      )}

      {page === "home" && (
        <VStack spacing={4}>
          <Text fontSize="2xl">Choose your role to get started.</Text>
          <Button leftIcon={<FaTaxi />} onClick={() => handleRoleSelection("seeker")} colorScheme="teal">
            I am a Taxi Seeker
          </Button>
          <Button leftIcon={<FaUser />} onClick={() => handleRoleSelection("operator")} colorScheme="teal">
            I am a Taxi Operator
          </Button>
        </VStack>
      )}

      {page === "searchTaxi" && (
        <VStack spacing={4}>
          <Text fontSize="2xl">Enter your destination to find a taxi.</Text>
          <Input placeholder="Destination" value={destination} onChange={(e) => setDestination(e.target.value)} />
          <Button onClick={handleSearchTaxi} colorScheme="teal">
            Search
          </Button>
        </VStack>
      )}

      {page === "results" && (
        <VStack spacing={4}>
          <Text fontSize="2xl">Available taxis near you.</Text>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} width="100%">
            <HStack spacing={4}>
              <Image src="https://images.unsplash.com/photo-1490650404312-a2175773bbf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0YXhpfGVufDB8fHx8MTcxNzMxOTAyOHww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="50px" />
              <VStack align="start">
                <Text>Taxi 1</Text>
                <Text>Fare: $10</Text>
                <Text>ETA: 5 mins</Text>
              </VStack>
              <Button onClick={handleBookTaxi} colorScheme="teal">
                Book Now
              </Button>
            </HStack>
          </Box>
        </VStack>
      )}

      {page === "bookingConfirmation" && (
        <VStack spacing={4}>
          <Text fontSize="2xl">You've successfully booked a taxi!</Text>
          <Text>Driver Name: {taxiDetails.driverName}</Text>
          <Text>Car Model: {taxiDetails.carModel}</Text>
          <Text>Plate Number: {taxiDetails.plateNumber}</Text>
          <Text>Estimated Time of Arrival: {taxiDetails.eta}</Text>
          <Button colorScheme="red">Cancel Booking</Button>
        </VStack>
      )}

      {page === "shiftOptions" && (
        <VStack spacing={4}>
          <Text fontSize="2xl">Set your availability status.</Text>
          <Button leftIcon={<FaSignInAlt />} onClick={() => handleShiftToggle(true)} colorScheme="teal">
            Shift On
          </Button>
          <Button leftIcon={<FaSignOutAlt />} onClick={() => handleShiftToggle(false)} colorScheme="red">
            Shift Off
          </Button>
        </VStack>
      )}

      {page === "shiftOn" && (
        <VStack spacing={4}>
          <Text fontSize="2xl">You're now online. Waiting for ride requests...</Text>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} width="100%">
            <HStack spacing={4}>
              <Image src="https://images.unsplash.com/photo-1605794978644-f0b340b2785a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0YXhpJTIwc2Vla2VyfGVufDB8fHx8MTcxNzMxOTAyOHww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="50px" />
              <VStack align="start">
                <Text>Ride Request 1</Text>
                <Text>Fare: $15</Text>
                <Button leftIcon={<FaCar />} colorScheme="teal">
                  Accept Ride
                </Button>
              </VStack>
            </HStack>
          </Box>
        </VStack>
      )}
    </Container>
  );
};

export default Index;
