import 'package:e_commerce/screens/login.dart';
import 'package:e_commerce/screens/onboarding.dart';
import 'package:flutter/material.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({Key? key}) : super(key: key);

  @override
  _SplashScreenState createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _opacityAnimation;

  @override
  void initState() {
    super.initState();

    _controller = AnimationController(
      vsync: this,
      duration: Duration(seconds: 2),
    );

    _opacityAnimation = Tween<double>(
      begin: 0.0,
      end: 1.0,
    ).animate(CurvedAnimation(
      parent: _controller,
      curve: Curves.easeInOut,
    ));

    Future.delayed(Duration(seconds: 4), () {
      _controller.forward().then((value) {
        _navigateToLoginScreen();
      });
    });
  }

  void _navigateToLoginScreen() {
    Navigator.of(context).pushReplacement(
      MaterialPageRoute(
        builder: (context) => OnboardingScreen(),
      ),
    );
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    double screenwidth = MediaQuery.of(context).size.width;
    double screenhight = MediaQuery.of(context).size.height;

    return Scaffold(
      backgroundColor: const Color(0XFFE3D5BB),
      body: Container(
        width: screenhight,
        height: screenhight,
        child: Padding(
          padding: EdgeInsets.fromLTRB(65, 309, 65, 0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Container(
                child: AnimatedBuilder(
                  animation: _opacityAnimation,
                  builder: (context, child) {
                    return Opacity(
                      opacity: _opacityAnimation.value,
                      child: child,
                    );
                  },
                  child: Image.asset('assets/images/animation.gif',),
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(top:150.0),
                child: Container(
              
                    child:  Image.asset('assets/images/output-onlinegiftools (1).gif',),
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
