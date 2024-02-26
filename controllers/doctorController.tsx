import { Request, Response } from 'express';
// import Doctor from '../models/doctorModel';
// import User from '../models/userModel';
// import Notification from '../models/notificationModel';
// import Appointment from '../models/appointmentModel';

const getalldoctors = async (req: Request, res: Response): Promise<void> => {
  try {
    let docs;
    if (!req.locals) {
      docs = await Doctor.find({ isDoctor: true }).populate('userId');
    } else {
      docs = await Doctor.find({ isDoctor: true })
        .find({
          _id: { $ne: req.locals },
        })
        .populate('userId');
    }

    res.send(docs);
  } catch (error) {
    res.status(500).send('Unable to get doctors');
  }
};

const getnotdoctors = async (req: Request, res: Response): Promise<void> => {
  try {
    const docs = await Doctor.find({ isDoctor: false })
      .find({
        _id: { $ne: req.locals },
      })
      .populate('userId');

    res.send(docs);
  } catch (error) {
    res.status(500).send('Unable to get non-doctors');
  }
};

const applyfordoctor = async (req: Request, res: Response): Promise<void> => {
  try {
    const alreadyFound = await Doctor.findOne({ userId: req.locals });
    if (alreadyFound) {
      res.status(400).send('Application already exists');
      return;
    }

    const doctor = new Doctor({ ...req.body.formDetails, userId: req.locals });
    const result = await doctor.save();

    res.status(201).send('Application submitted successfully');
  } catch (error) {
    res.status(500).send('Unable to submit application');
  }
};

const acceptdoctor = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.body.id },
      { isDoctor: true, status: 'accepted' }
    );

    const doctor = await Doctor.findOneAndUpdate(
      { userId: req.body.id },
      { isDoctor: true }
    );

    const notification = new Notification({
      userId: req.body.id,
      content: 'Congratulations, Your application has been accepted.',
    });

    await notification.save();

    res.status(201).send('Application accepted notification sent');
  } catch (error) {
    res.status(500).send('Error while sending notification');
  }
};

const rejectdoctor = async (req: Request, res: Response): Promise<void> => {
  try {
    const details = await User.findOneAndUpdate(
      { _id: req.body.id },
      { isDoctor: false, status: 'rejected' }
    );
    const delDoc = await Doctor.findOneAndDelete({ userId: req.body.id });

    const notification = new Notification({
      userId: req.body.id,
      content: 'Sorry, Your application has been rejected.',
    });

    await notification.save();

    res.status(201).send('Application rejection notification sent');
  } catch (error) {
    res.status(500).send('Error while rejecting application');
  }
};

const deletedoctor = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await User.findByIdAndUpdate(req.body.userId, {
      isDoctor: false,
    });
    const removeDoc = await Doctor.findOneAndDelete({
      userId: req.body.userId,
    });
    const removeAppoint = await Appointment.findOneAndDelete({
      userId: req.body.userId,
    });
    res.send('Doctor deleted successfully');
  } catch (error) {
    console.log('error', error);
    res.status(500).send('Unable to delete doctor');
  }
};

export {
  getalldoctors,
  getnotdoctors,
  deletedoctor,
  applyfordoctor,
  acceptdoctor,
  rejectdoctor,
};
