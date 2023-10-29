import 'package:e_commerce/screens/login.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class OnboardingScreen extends StatefulWidget {
  OnboardingScreen({Key? key}) : super(key: key);

  @override
  State<OnboardingScreen> createState() => _OnboardingScreenState();
}

class _OnboardingScreenState extends State<OnboardingScreen> {
  PageController moveto = PageController();
  void initState() {
    moveto = PageController(initialPage: 0);
    super.initState();
  }

  List images = [
    'assets/images/page3.png',
    'assets/images/page2.png',
    'assets/images/page3.png',
  ];

  List text = [
    'Browse the menu \n and order directly from \n the application',
    'Your order will be \n immediately collected and \n sent by our courier',
    'Pick up delivery \n at your door and enjoy \n groceries'
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Color(0XFFE3D5BB),
        body: PageView.builder(
          physics: NeverScrollableScrollPhysics(),
          controller: moveto,
          itemCount: images.length,
          itemBuilder: (BuildContext context, int index) {
            return Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                SizedBox(
                  height: 4,
                ),
                Row(
                  children: [
                    if (index != 0)
                      Padding(
                        padding: const EdgeInsets.only(left: 10.0, top: 15),
                        child: SizedBox(
                          width: 42,
                          height: 41,
                          child: ElevatedButton(
                            onPressed: () {
                              moveto.animateToPage(index - 1,
                                  duration: Duration(milliseconds: 500),
                                  curve: Curves.easeIn);
                            },
                            style: ElevatedButton.styleFrom(
                              primary: Color(0XFF191E21),
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(13),
                              ),
                            ),
                            child: Image.asset(
                              'assets/images/ep_arrow-left-bold (1).png',
                              width: 23,
                              height: 23,
                              fit: BoxFit.cover,
                            ),
                          ),
                        ),
                      ),
                    Spacer(
                      flex: 1,
                    ),
                    TextButton(
                      onPressed: () {
                        Navigator.of(context).pushReplacement(
                          MaterialPageRoute(
                            builder: (context) => LoginScreen(),
                          ),
                        );
                      },
                      child: Padding(
                        padding: const EdgeInsets.only(right: 10.0, top: 15),
                        child: Text(
                          'Skip',
                          style: GoogleFonts.poppins(
                              textStyle: TextStyle(
                                  color: Color(0XFF191E21),
                                  fontSize: 20,
                                  fontWeight: FontWeight.bold)),
                        ),
                      ),
                    ),
                  ],
                ),
                if (index != 1) Image.asset(images[index]),
                SizedBox(
                  height: 43,
                ),
                if (index == 1)
                  Text(
                    text[index],
                    textAlign: TextAlign.center,
                    style: GoogleFonts.poppins(
                      color: Color(0XFF191E21),
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                if (index == 1) Image.asset(images[index]),
                if (index != 1)
                  Text(
                    text[index],
                    textAlign: TextAlign.center,
                    style: GoogleFonts.poppins(
                      color: Color(0XFF191E21),
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                SizedBox(
                  height: 159,
                ),
                SizedBox(
                  width: 84,
                  height: 84,
                  child: ElevatedButton(
                    onPressed: () {
                      if (index != 2) {
                        moveto.animateToPage(index + 1,
                            duration: Duration(milliseconds: 500),
                            curve: Curves.easeIn);
                      } else {
                        Navigator.of(context).pushReplacement(
                          MaterialPageRoute(
                            builder: (context) => LoginScreen(),
                          ),
                        );
                      }
                    },
                    child: Image.asset('assets/images/ep_arrow-left-bold.png'),
                    style: ElevatedButton.styleFrom(
                      primary: Color(0XFF191E21),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(500),
                      ),
                    ),
                  ),
                )
              ],
            );
          },
        ));
  }
}
