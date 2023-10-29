import 'package:e_commerce/screens/newpass.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class CreatePass extends StatelessWidget {
  const CreatePass({super.key});

  @override
  Widget build(BuildContext context) {
    double height = MediaQuery.of(context).size.height;
    double width = MediaQuery.of(context).size.width;
    return Scaffold(
      backgroundColor: const Color(0xff0e3d5bb),
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            SizedBox(
              height: height * 0.15,
            ),
            ElevatedButton(
              style: ElevatedButton.styleFrom(
                backgroundColor: const Color(0xff191E21),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(20),
                ),
                minimumSize: Size(width * 0.05, height * 0.06),
              ),
              onPressed: () {
                Navigator.pop(context);
              },
              child: Image.asset("images/ep_arrow-left-bold.png"),
            ),
            SizedBox(
              height: height * 0.05,
            ),
            Text(
              "Create new password",
              style: GoogleFonts.poppins(
                color: Colors.black,
                fontSize: 22,
                fontWeight: FontWeight.w700,
              ),
            ),
            SizedBox(
              height: height * 0.03,
            ),
            Text(
              "The password shuold be different from the previous password",
              style: GoogleFonts.poppins(
                color: Colors.black,
                fontSize: 15.5,
                fontWeight: FontWeight.w500,
              ),
            ),
            SizedBox(
              height: height * 0.02,
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
                      color: Colors.black.withOpacity(0.5),
                      fontSize: 15,
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
              height: height * 0.015,
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
                      color: Colors.black.withOpacity(0.5),
                      fontSize: 15,
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
              height: height * 0.03,
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
              height: height * 0.02,
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
              height: height * 0.02,
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
              height: height * 0.06,
            ),
            ElevatedButton(
              style: ElevatedButton.styleFrom(
                backgroundColor: const Color(0xff191E21),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(10),
                ),
                minimumSize: Size(width, height * 0.06),
              ),
              onPressed: () {
                  Navigator.push(context, MaterialPageRoute(builder: (context) {
                    return NewPass();
                  }));
                },
              child: Text(
                "Reset password",
                style: GoogleFonts.poppins(
                  color: Colors.white,
                  fontSize: 20,
                  fontWeight: FontWeight.w600,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
