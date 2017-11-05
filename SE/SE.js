function GetDatabase()
{
    var Database = 
    {
        PickABelief:
        {
            question: "Pick a belief that clearly defines who you are, it could be that you believe in a certain religion, or karma, or spirits...",
            answers:
            {
                "next"                               : "WouldChangeOnesMind",
            }
        },

        WouldChangeOnesMind :
        {
            question: "What would you accept to get you get rid of your belief on <belief>?",
            answers:
            {
                "I would accept evidence"                               : "WouldAcceptEvidence",
                "I wouldn\'t accept anything, I won\'t change my mind"  : "WontChangeMind",
            }
        },

        WontChangeMind :
        {
            question:"Do you want to go through life believing in things that are true?",
            answers:
            {
                "yes": "WantTruthButWontAcceptEvidence",			
                "I don't mind": "DoNotWantTruthAndWontAcceptEvidence",			
            }
        },
        
        DoNotWantTruthAndWontAcceptEvidence:
        {
            question: "Ok, thank you very much for you time",
            answers:
            {			
            }
        },
        
        WantTruthButWontAcceptEvidence :
        {
            question: "Could you really go to rest of your life with a belief, and never have a way to realize whether is true?",
            answers:
            {
                "If it is true for me that is what really matters" : "TrueForMe",
            }
        },

        TrueForMe :
        {
            question: "If I consider true for me that your car is now mine, would I be right?",
            answers:
            {
                "Yes": "ThankYou",
                "No!": "WouldAcceptEvidence",
            }
        },
        
        ThankYou :
        {
            question: "Thank you!",
            answers:
            {
            }
        },
        
        WouldAcceptEvidence :
        {
            question: "Could a person with a different belief than you still be right?",
            answers: 
            {
                "Only one person could be right" : "OnlyOneBeliefCanBeTrue",
                "Both persons could be right, truth depends on the observer" : "TruthDependsOnObserver",
            }
        },
        
        TruthDependsOnObserver :
        {
            question: "Is something true regardless of how a person believes it?",
            answers:
            {
                "Yes, for example consider the placebo effect": "PlaceboEffect",
                "No, you can believe on something and still be wrong": "OnlyOneBeliefCanBeTrue",
            }
        },
        
        PlaceboEffect :
        {
            question: "Are there any limitations? Could I be a surgeon by just believing I am?",
            answers:
            {
                "Yes, everything is in your mind": "TrueForMe",
                "No, just believing is not enough":"OnlyOneBeliefCanBeTrue",
            }
        },
        
        OnlyOneBeliefCanBeTrue :
        {
            question: "What belief did you pick?",
            answers:
            {
                "$the Bible$ "  :"HolyBookIsTrue",
                "$the Quran$"   :"HolyBookIsTrue",
                "$karma$"       :"karma",
                "$ghosts$"      :"ghosts"
            }
        },

    ///////////////////////////////////////////////////////////////////////////////////////
        HolyBookIsTrue :
        {
            question: "What made you believe <belief> is true?",
            answers:
            {
                "personal experience"                       : "PersonalExperience",
                "my family raised me this way"              : "RaisedWithBelief",
                "Prayers and miracles."                     : "PrayersWork",
                "I feel better that way."                   : "FeelBetterWithBelief",
                "If I am wrong I dont lose anything."       : "PascalWager",
                "It made me be a better person."            : "BetterPerson",
                "The holy book is consistent with reality." : "HolyBookConsistent",
                "I just know it."                           : "GutFeeling",
                "I have faith."                             : "IHaveFaith",
            }
        },

        
        IHaveFaith : 
        {
            question: "Does just believing in something, make that something true?",
            answers:
            {
                "Yes" : "FaithMakesThingsTrue",
                "No"  : "FaithDoesNotMakeBeliefTrue",
                "People can believe in whatever they want" : "AllBelievesAreOK",
            }
        },

        FeelBetterWithBelief : 
        {
            question: "If someone who doesn\'t believe in <belief> told us that they have another belief that makes them feel better, would it make their belief true?",
            answers:
            {
                "That wouldn\'t be reliable" : "FeelBetterWithOtherBeliefNotReliable",
                "Yes it it works for them"   : "BeliefGoodIfMakesYouFeelBetter",
            }
        },

        BeliefGoodIfMakesYouFeelBetter :
        {
            question: "If I believe that smoking makes me feel better, does it make it a good belief?",
            answers:
            {
                "yes" : "ThanksForYourTime",
                "no" : "RaisedWithBeliefIsTrueNot",
            }
        },
        
        FeelBetterWithOtherBeliefNotReliable : 
        {
            question: "If it's not reliable for them, Why was it reliable for yourself?",
            answers:
            {
            }
        },

        RaisedWithBelief : 
        {
            question: "Does him being raised with a particular belief in mind make the belief true?",
            answers:
            {
                "yes" : "RaisedWithBeliefIsTrue",
            }
        },

        RaisedWithBeliefIsTrue : 
        {
            question: "So being raised to believe that smoking is good, does it makes it true that smoking is actually good?",
            answers:
            {
                "yes" : "ThanksForYourTime",
                "no" : "RaisedWithBeliefIsTrueNot",
            }
        },

        RaisedWithBeliefIsTrueNot : 
        {
            question: "Ok, if being raised doesn't make a belief true, what does it make it to be true?",
            answers:
            {
                "next" : "HolyBookIsTrue",
            }
        },

        PrayersWork : 
        {
            question: "How do you tell the difference between a prayer literally being answered by a god and it just being coincidental, and you lucked out?",
            answers:
            {
                "next" : "HolyBookIsTrue",
            }
        },

    //////////////////////////////////////////////////////////////////////////////////    
        karma :     
        {
            question: "Is there a chance that someone evil can go the the rest of his life, and never have anything bad happen to him?",
            answers:
            {
                "I think so"                               : "karmaWorksSometimes",
                "not really"                               : "karmaWorks",
            }
        },

        karmaWorksSometimes :
        {
            question: "If that happens, what would that would that affect you in any way on the confidence of your belief in karma?",
            answers:
            {
                "I\'d believe less"                        : "done",
                "not really"                               : "karmaWorks",
            }
        },
        
        karmaWorks : 
        {
            question: "How do you differentiate karmic punishment/reward from things just happening?",
            answers:
            {
                "I can\'t differentiate"                   : "karmaCannotDifferentiate",
                "not really, if I do it is just because"   : "karmaCanDifferentiate",
                "the punishment/reward happens just after" : "karmaCanDifferentiateCloseInTime",
            }
        },
        
        karmaCannotDifferentiate : 
        {
            question: "Why believe in karma then if you cannot tell the difference between karma and chance?",
            answers:
            {
                "I have facts"          : "karmaIHaveFacts",
                "I dont have any facts" : "karmaIDoNotHaveFacts"
            }
        },

        karmaIDoNotHaveFacts :
        {
            question: "So until you have those facts, what would be a more accurate, a more honest position to be?",
            answers:
            {
            }
        },

        karmaIHaveFacts :
        {
            question: "Awesome, if you have facts we'd definitely like to hear about it!",
            answers:
            {
            }
        },

        karmaCanDifferentiate :
        {
            question: "Do you find yourself doing things in your life that are good so you can get good things in return?",
            answers:
            {
                "not really, if I do it is just because" : "karmaDoGoodNotReally",
                "yes sometimes"                          : "karma",
            }
        },

        karmaDoGoodNotReally :
        {
            question: "If you don\'t find yourself on a a regular basis doing good things with the expectation that good things will happen is karma really that important of a role in your life to begin with?",
            answers:
            {
            }
        },
        
        GutFeeling :
        {
            question: "Do your instincts, your guts, your feelings always lead you to the right path?",
            answers:
            {
                "Well it might not lead me down a path that I expected, but it\'s always the right path" : "GutLeadsToGoodDecisions"
            }
        },

        GutLeadsToGoodDecisions :
        {
            question: "do you have any way of testing your instinct, your gut, your feelings?",
            answers:
            {
                "Not really, I just trust them" : "CannotTestGutFeelings"
            }
        },

        CannotTestGutFeelings :
        {
            question: "If you have no way of testing your gut feelings, how do you know that it\'s actually working in the way that you think that it is?",
            answers:
            {
            }
        },
    }

    return Database;
}
