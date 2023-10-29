import 'package:e_commerce/screens/login.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class CreateAcc extends StatelessWidget {
  const CreateAcc({super.key});

  @override
  Widget build(BuildContext context) {
    double height = MediaQuery.of(context).size.height;
    double width = MediaQuery.of(context).size.width;
    return Scaffold(
      backgroundColor: const Color(0xff0e3d5bb),
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 20),
        child: Column(
          children: [
            SizedBox(
              height: height * 0.1,
            ),
            Center(
              child: Text(
                "Markit",
                style: GoogleFonts.poppins(
                  color: const Color(0xff0912b22),
                  fontSize: 30,
                  fontWeight: FontWeight.w700,
                ),
              ),
            ),
            SizedBox(
              height: height * 0.05,
            ),
            Text(
              "Create an Account",
              style: GoogleFonts.poppins(
                color: Colors.black,
                fontSize: 22,
                fontWeight: FontWeight.w600,
              ),
            ),
            SizedBox(
              height: height * 0.025,
            ),
            SizedBox(
              height: height * 0.08,
              child: Card(
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(10),
                ),
                shadowColor: Colors.black,
                elevation: 5,
                child: TextField(
                  decoration: InputDecoration(
                    filled: true,
                    fillColor: Colors.white,
                    hintText: "Email",
                    hintStyle: GoogleFonts.poppins(
                      color: Colors.black.withOpacity(0.7),
                      fontSize: 16,
                      fontWeight: FontWeight.w500,
                    ),
                    border: OutlineInputBorder(
                      borderSide:
                          BorderSide.none, // set the border side to none
                      borderRadius: BorderRadius.circular(10),
                    ),
                  ),
                ),
              ),
            ),
            SizedBox(
              height: height * 0.01,
            ),
            SizedBox(
              height: height * 0.08,
              child: Card(
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(10),
                ),
                shadowColor: Colors.black,
                elevation: 5,
                child: TextField(
                  decoration: InputDecoration(
                    suffixIcon: Image.asset("images/tabler_eye-closed.png"),
                    filled: true,
                    fillColor: Colors.white,
                    hintText: "Password",
                    hintStyle: GoogleFonts.poppins(
                      color: Colors.black.withOpacity(0.7),
                      fontSize: 16,
                      fontWeight: FontWeight.w500,
                    ),
                    border: OutlineInputBorder(
                      borderSide:
                          BorderSide.none, // set the border side to none
                      borderRadius: BorderRadius.circular(10),
                    ),
                  ),
                ),
              ),
            ),
            SizedBox(
              height: height * 0.01,
            ),
            SizedBox(
              height: height * 0.08,
              child: Card(
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(10),
                ),
                shadowColor: Colors.black,
                elevation: 5,
                child: TextField(
                  decoration: InputDecoration(
                    suffixIcon: Image.asset("images/tabler_eye-closed.png"),
                    filled: true,
                    fillColor: Colors.white,
                    hintText: "confirm Password",
                    hintStyle: GoogleFonts.poppins(
                      color: Colors.black.withOpacity(0.7),
                      fontSize: 16,
                      fontWeight: FontWeight.w500,
                    ),
                    border: OutlineInputBorder(
                      borderSide:
                          BorderSide.none, // set the border side to none
                      borderRadius: BorderRadius.circular(10),
                    ),
                  ),
                ),
              ),
            ),
            SizedBox(
              height: height * 0.01,
            ),
            Row(
              children: [
                CircleAvatar(
                  radius: 10,
                  backgroundColor: Colors.green,
                  child: Image.asset(
                    "images/icon-park-solid_correct.png",
                  ),
                ),
                Text(
                  " At least 8 characters",
                  style: GoogleFonts.inter(
                    color: Colors.green,
                    fontSize: 14,
                    fontWeight: FontWeight.w500,
                  ),
                )
              ],
            ),
            SizedBox(
              height: height * 0.01,
            ),
            Row(
              children: [
                CircleAvatar(
                  radius: 10,
                  backgroundColor: Colors.green,
                  child: Image.asset(
                    "images/icon-park-solid_correct.png",
                  ),
                ),
                Text(
                  " At least 1 number",
                  style: GoogleFonts.inter(
                    color: Colors.green,
                    fontSize: 14,
                    fontWeight: FontWeight.w500,
                  ),
                )
              ],
            ),
            SizedBox(
              height: height * 0.01,
            ),
            Row(
              children: [
                CircleAvatar(
                  radius: 10,
                  backgroundColor: Colors.green,
                  child: Image.asset(
                    "images/icon-park-solid_correct.png",
                  ),
                ),
                Text(
                  " Bath upper and lower case letters",
                  style: GoogleFonts.inter(
                    color: Colors.green,
                    fontSize: 14,
                    fontWeight: FontWeight.w500,
                  ),
                )
              ],
            ),
            SizedBox(
              height: height * 0.03,
            ),
            ElevatedButton(
              style: ElevatedButton.styleFrom(
                backgroundColor: const Color(0xff191E21),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(10),
                ),
                minimumSize: Size(width, height * 0.06),
              ),
              onPressed: () {},
              child: Text(
                "Sign Up",
                style: GoogleFonts.poppins(
                  color: Colors.white,
                  fontSize: 16,
                  fontWeight: FontWeight.w500,
                ),
              ),
            ),
            SizedBox(
              height: height * 0.03,
            ),
            Center(
              child: Text(
                "Or Log in with",
                style: GoogleFonts.poppins(
                  color: Colors.black.withOpacity(0.67),
                  fontSize: 18,
                  fontWeight: FontWeight.w500,
                ),
              ),
            ),
            SizedBox(
              height: height * 0.03,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                ElevatedButton(
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xff191E21),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(10),
                    ),
                    minimumSize: Size(width * 0.25, height * 0.09),
                  ),
                  onPressed: () {},
                  child: Image.asset("images/bi_google.png"),
                ),
                ElevatedButton(
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xff191E21),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(10),
                    ),
                    minimumSize: Size(width * 0.25, height * 0.09),
                  ),
                  onPressed: () {},
                  child: Image.asset("images/fa_facebook.png"),
                ),
                ElevatedButton(
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xff191E21),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(10),
                    ),
                    minimumSize: Size(width * 0.25, height * 0.09),
                  ),
                  onPressed: () {},
                  child: Image.asset("images/simple-icons_x.png"),
                ),
              ],
            ),
            SizedBox(
              height: height * 0.01,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  "have any account ?",
                  style: GoogleFonts.poppins(
                    color: const Color(0xff191E21),
                    fontSize: 15,
                    fontWeight: FontWeight.w600,
                  ),
                ),
                TextButton(
                  onPressed: () {
                  Navigator.push(context, MaterialPageRoute(builder: (context) {
                    return LoginScreen();
                  }));
                },
                  child: Text(
                    "Log in.",
                    style: GoogleFonts.poppins(
                      color: const Color(0xff912B22),
                      fontSize: 15,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
