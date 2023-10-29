import 'package:e_commerce/screens/createpass.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:pinput/pinput.dart';

class Verificarion extends StatelessWidget {
  const Verificarion({super.key});

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
              "Please check your Email",
              style: GoogleFonts.poppins(
                color: Colors.black,
                fontSize: 22,
                fontWeight: FontWeight.w700,
              ),
            ),
            SizedBox(
              height: height * 0.03,
            ),
            RichText(
              text: TextSpan(
                style: GoogleFonts.poppins(
                  color: Colors.black,
                  fontSize: 19,
                  fontWeight: FontWeight.w500,
                ),
                children: <TextSpan>[
                  const TextSpan(
                    text: 'We have sent code to',
                  ),
                  TextSpan(
                    text: 'Badr23@gmail.com',
                    style: GoogleFonts.poppins(
                      color: Colors.black,
                      fontWeight: FontWeight.w800,
                    ),
                  ),
                ],
              ),
            ),
            SizedBox(
              height: height * 0.05,
            ),
            const Pinput(
              length: 5,
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            ),
            SizedBox(
              height: height * 0.02,
            ),
            Center(
              child: Text(
                "Send code again 00:45",
                style: GoogleFonts.poppins(
                  color: Colors.black,
                  fontSize: 16,
                  fontWeight: FontWeight.w500,
                ),
              ),
            ),
            SizedBox(
              height: height * 0.1,
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
                    return CreatePass();
                  }));
                },
              child: Text(
                "Verification",
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
